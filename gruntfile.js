module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          optimize: 'none',
          name: 'main',
          baseUrl: 'static/js',
          mainConfigFile: 'static/js/main.js',
          out: 'static/js/main.build.js'
        }
      }
    },

    sass: {
      dist: {
        files: {
          'static/stylesheets/screen.css': 'static/stylesheets/screen.scss'
        }
      }
    },

    watch: {
      css: {
        files: 'static/stylesheets/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    }

  });

  grunt.registerTask('build', ['requirejs', 'sass']);
}