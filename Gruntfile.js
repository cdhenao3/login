module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        esversion:6,
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ['src']
        },
        files: {
          'src/css/style.css': 'src/less/style.less'
        }
      }
    },
    serve: {
      options: {
        port: 9000
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['jshint','less', 'serve']);
  
  };