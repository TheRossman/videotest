module.exports = function(grunt){

  grunt.config('clean', {
    serve: ['.serve/**/*'],
    build: ['dist/**/*']
  });
};