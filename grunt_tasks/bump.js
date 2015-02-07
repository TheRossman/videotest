module.exports = function(grunt){

  grunt.config('bump', {
    options: {
      files: ['package.json'],
      updateConfigs: ['pkg'],
      commit: true,
      commitMessage: 'Release v%VERSION%',
      commitFiles: ['-a'], // '-a' for all files
      createTag: true,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: true,
      pushTo: 'origin master',
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
    }
  });
};
