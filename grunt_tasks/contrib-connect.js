module.exports = function(grunt){

  grunt.config('connect', {
    serve: {
      options: {
        hostname: '<%= pkg.localServer %>',
        port: '<%= pkg.localServerPort %>',
        base:'.serve',
        protocol: 'https'
      }
    }
  });
};
