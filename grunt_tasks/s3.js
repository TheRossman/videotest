module.exports = function(grunt){
  
  var srcPaths = {
    'index': 'dist/*.html',
    'css': 'dist/css/*',
    'fonts' : 'dist/css/fonts/*',
    'js': 'dist/scripts/**',
    'img': 'dist/images/*',
    'swf': 'dist/swf/*'
  }

  grunt.config('s3', {
    options: {
      key: '<%= secret.aws.key %>',
      secret: '<%= secret.aws.secret %>',
      bucket: '<%= secret.aws.bucket %>',
      access: 'public-read',
      maxOperations: 20,
      gzip: true
    },

    preview: {
      options: {
        headers: {
          // 10 minute cache policy (1000 * 60 * 10)
          "Cache-Control": "max-age=600, public, must-revalidate, proxy-revalidate",
          "Expires": new Date(Date.now() + 600000).toUTCString()
        }
      },
      upload: [
        {
          src: srcPaths.index,
          dest: 'videoproject'
        },
        {
          src: srcPaths.css,
          dest: 'videoproject/css'
        },
        {
          src: srcPaths.fonts,
          dest: 'videoproject/css/fonts',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.img,
          dest: 'videoproject/images',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.js,
          dest: 'videoproject/scripts',
          rel: 'dist/scripts'
        },
        {
          src: srcPaths.swf,
          dest: 'videoproject/swf',
          options: {
            gzip: false
          }
        }
      ]
    },

    stable: {
      options: {
        headers: {
          // 10 minute cache policy (1000 * 60 * 10)
          "Cache-Control": "max-age=600, public, must-revalidate, proxy-revalidate",
          "Expires": new Date(Date.now() + 600000).toUTCString()
        }
      },
      del: [
        {
          src: '<%= secret.aws.folder %>/stable'
        }
      ],
      upload: [
        {
          src: srcPaths.index,
          dest: '<%= secret.aws.folder %>/stable'
        },
        {
          src: srcPaths.css,
          dest: '<%= secret.aws.folder %>/stable/css'
        },
        {
          src: srcPaths.fonts,
          dest: '<%= secret.aws.folder %>/stable/css/fonts',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.img,
          dest: '<%= secret.aws.folder %>/stable/images',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.js,
          dest: '<%= secret.aws.folder %>/stable/scripts',
          rel: 'dist/scripts'
        },
        {
          src: srcPaths.swf,
          dest: '<%= secret.aws.folder %>/stable/swf',
          options: {
            gzip: false
          }
        }
      ]
    },

    latest: {
      options: {
        headers: {
          // 10 minute cache policy (1000 * 60 * 10)
          "Cache-Control": "max-age=600, public",
          "Expires": new Date(Date.now() + 600000).toUTCString()
        }
      },
      del: [
        {
          src: '<%= secret.aws.folder %>/latest'
        }
      ],
      upload: [
        {
          src: srcPaths.index,
          dest: '<%= secret.aws.folder %>/latest'
        },
        {
          src: srcPaths.css,
          dest: '<%= secret.aws.folder %>/latest/css'
        },
        {
          src: srcPaths.fonts,
          dest: '<%= secret.aws.folder %>/latest/css/fonts',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.img,
          dest: '<%= secret.aws.folder %>/latest/images',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.js,
          dest: '<%= secret.aws.folder %>/latest/scripts',
          rel: 'dist/scripts'
        },
        {
          src: srcPaths.swf,
          dest: '<%= secret.aws.folder %>/latest/swf',
          options: {
            gzip: false
          }
        }
      ]
    },

    versions: {
      options: {
        headers: {
          // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
          "Cache-Control": "max-age=630720000, public",
          "Expires": new Date(Date.now() + 63072000000).toUTCString()
        }
      },
      upload: [
        {
          src: srcPaths.index,
          dest: '<%= secret.aws.folder %>/<%= pkg.version %>'
        },
        {
          src: srcPaths.css,
          dest: '<%= secret.aws.folder %>/<%= pkg.version %>/css'
        },
        {
          src: srcPaths.fonts,
          dest: '<%= secret.aws.folder %>/<%= pkg.version %>/css/fonts',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.img,
          dest: '<%= secret.aws.folder %>/<%= pkg.version %>/images',
          options: {
            gzip: false
          }
        },
        {
          src: srcPaths.js,
          dest: '<%= secret.aws.folder %>/<%= pkg.version %>/scripts',
          rel: 'dist/scripts'
        },
        {
          src: srcPaths.swf,
          dest: '<%= secret.aws.folder %>/<%= pkg.version %>/swf',
          options: {
            gzip: false
          }
        }
      ]
    }
  });
};
