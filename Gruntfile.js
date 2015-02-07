module.exports = function(grunt){
  
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    oldPkg: grunt.file.readJSON('package.json'),
    pkg: grunt.file.readJSON('package.json'),
    secret: grunt.file.readJSON('grunt-secret.json')
  });

  grunt.loadTasks('grunt_tasks');

  grunt.registerTask('default', ['test', 'clean:serve', 'compass:devBuild', 'copy:jsFilesDev', 'copy:swfFilesDev', 'copy:imgFilesDev', 'copy:htmlFilesDev', 'copy:fontFilesDev', 'connect:serve', 'open', 'concurrent:watch']);
  grunt.registerTask('build', ['clean:build', 'compass:build', 'test', 'uglify', 'copy:jsFilesDist', 'copy:htmlFilesDist', 'copy:swfFilesDist', 'copy:imgFilesDist','copy:fontFilesDist']);
  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('release', function (bumpType) {
    if (bumpType == undefined) {
      bumpType = 'patch';
    }
    if (bumpType === 'stable') {
      grunt.task.run(['build', 's3:stable', 'http:basecamp_post_stable' ]);
      return;
    }
    if (bumpType === 'preview') {
      grunt.task.run(['build', 's3:preview']);
      return;
    }
    grunt.task.run(['bump-only:' + bumpType, 'changelog', 'bump-commit', 'build', 's3:versions', 's3:latest' ]);
    grunt.task.run(['postChangelogToBasecamp']);
  });

  grunt.registerTask('postChangelogToBasecamp', function () {
    var templog = grunt.file.read('.templog.txt');
    grunt.config('templog', templog);
    grunt.task.run(['http:basecamp_post']);
  });
};
