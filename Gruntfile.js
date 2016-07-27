


 
module.exports = function (grunt) {
  'use strict';
  pkg: grunt.file.readJSON('package.json');  
  grunt.initConfig({
    watch: {
      // if any .less file changes in directory "css/" run the "less"-task.
      less: {
        files: "less/*.less",
        tasks: ["less"]
      }
    },
    // "less"-task configuration
    less: {
      // production config is also available
      development: {
        options: {
          // Specifies directories to scan for @import directives when parsing. 
          // Default value is the directory of the source, which is probably what you want.
          paths: ["node_modules/bootstrap/less/"]
        },
        files: {
          // compilation.css  :  source.less
          "css/app.css": "less/app.less"
        }
      },
    },
    connect: {
      server: {
        options: {
          port: 8080
        }
      }
    },
    grunticon: {
      icons: {
        files: [{
          expand: true,
          cwd: 'source/svg',
          src : '*.svg',
          dest: 'css'
        }],
        options: {
          enhanceSVG: true,
          compressPNG: true,
          cssprefix: '.icon-'
        }
      }
    }
  });


  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-grunticon');

  // the default task (running "grunt" in console) is "connect & watch"
  grunt.registerTask('default', ['connect','watch','grunticon:icons']);
};