module.exports = function(grunt){

  grunt.config('uglify', {
    pkg_target: {
      options: {
        banner: '/*! <%= pkg.name %> | version: <%= pkg.version %> */\n',
        preserveComments: 'some',
        sourceMap: 'dist/scripts/<%= pkg.name %>.min.map',
        sourceMappingURL: '<%= pkg.name %>.min.map',
        sourceMapPrefix: 2
      },
      files: {'dist/scripts/<%= pkg.name %>.min.js' : ['src/scripts/**/*.js']}
    }
  });
};