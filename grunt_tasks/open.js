module.exports = function(grunt){

  grunt.config('open', {
    dev: {
      path: 'https://' + '<%= pkg.localServer %>' + ':<%= pkg.localServerPort %>'
    }
  });
};
