module.exports = function(grunt){

  grunt.config('watch', {
    js: {
      files: ['src/**/*.js', 'test/**/*.spec.js'],
      tasks: ['jshint', 'jasmine', 'copy:jsFilesDev']
    },

    html: {
      files: ['src/*.html'],
      tasks: ['copy:htmlFilesDev']
    },

    swf: {
      files: ['src/swf/**/*'],
      tasks: ['copy:swfFilesDev']
    },

    images: {
      files: ['src/images/**/*'],
      tasks: ['copy:imgFilesDev']
    },

    fonts: {
      files: ['src/sass/fonts/*'],
      tasks: ['copy:fontFilesDev']
    }
  });
};
