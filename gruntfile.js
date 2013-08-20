module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          name: 'main',
          baseUrl: 'static/scripts',
          mainConfigFile: 'static/scripts/main.js',
          out: 'static/scripts/main.build.js'
        }
      }
    }

  });

  grunt.registerTask('build', ['requirejs']);
}