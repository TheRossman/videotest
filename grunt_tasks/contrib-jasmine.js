module.exports = function(grunt){

  grunt.config('jasmine', {
      contentbrowser: {
        options: {
          specs: 'test/contentbrowser/*.spec.js',
          vendor: [
            'test/helpers/vendor/jquery-1.11.0.min.js',
            'test/helpers/vendor/jasmine-jquery.js',
            'src/scripts/ingestor.js',
            'src/scripts/utils.js'
          ]
        },
        src: ['src/scripts/contentbrowser.js']
      },
      
      videoplayer: {
        options: {
          specs: 'test/videoplayer/*.spec.js',
          vendor: [
            'test/helpers/vendor/jquery-1.11.0.min.js',
            'test/helpers/vendor/jasmine-jquery.js',
            'src/scripts/ingestor.js',
            'src/scripts/utils.js'
          ]
        },
        src: ['src/scripts/videoplayer.js']
      },

      ingestor: {
        options: {
          specs: 'test/ingestor/*.spec.js',
          vendor: [
            'test/helpers/vendor/jquery-1.11.0.min.js',
            'test/helpers/vendor/jasmine-jquery.js',
            'src/scripts/utils.js'
          ]
        },
        src: ['src/scripts/ingestor.js']
      }
  });
};
