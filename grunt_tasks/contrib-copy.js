module.exports = function(grunt){

  grunt.config('copy', {
    jsFilesDist: {
      files: [
        {expand: true, flatten: false, cwd: 'src/', src: ['scripts/**/*.js'], dest: 'dist', filter: 'isFile'}
      ]
    },
    
    jsFilesDev: {
      files: [
        {expand: true, flatten: false, cwd: 'src/', src: ['scripts/**/*.js'], dest: '.serve', filter: 'isFile'}
      ]
    },
    
    swfFilesDev: {
      files: [
        {expand: true, flatten: false, cwd: 'src/', src: ['swf/**/*'], dest: '.serve', filter: 'isFile'}
      ]
    },

    swfFilesDist: {
      files: [
        {expand: true, flatten: false, cwd: 'src/', src: ['swf/**/*'], dest: 'dist', filter: 'isFile'}
      ]
    },
		imgFilesDev: {
      files: [
        {expand: true, flatten: false, cwd: 'src/', src: ['images/**/*'], dest: '.serve', filter: 'isFile'}
      ]
    },

    imgFilesDist: {
      files: [
        {expand: true, flatten: false, cwd: 'src/', src: ['images/**/*'], dest: 'dist', filter: 'isFile'}
      ]
    },

    htmlFilesDev: {
      files: [
        {expand: true, flatten: true, src: ['src/**/*.html'], dest: '.serve'}
      ]
    },

    htmlFilesDist: {
      files: [
        {expand: true, flatten: true, src: ['src/**/*.html'], dest: 'dist'}
      ]
    },

    fontFilesDev: {
      files : [
        {expand: true, flatten: false, cwd: 'src/sass/', src: ['fonts/*'], dest: '.serve/css'}
      ]
    },

    fontFilesDist: {
      files : [
        {expand: true, flatten: false, cwd: 'src/sass/', src: ['fonts/*'], dest: 'dist/css'}
      ]
    }
  });
};
