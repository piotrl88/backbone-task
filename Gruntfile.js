"use strict";
module.exports = function(grunt) {
    grunt.initConfig({
        concat : {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'js/vendor/jquery-1.10.2.min.js',
                    'js/vendor/underscore.js',
                    'js/vendor/backbone.js',
                    'js/modules/*.js',
                    'js/models/*.js',
                    'js/views/*.js',
                    'js/routes/*.js'
                ],
                dest: 'deploy/js/main.js'
            }
        },
        uglify : {
            js : {
                files : {
                    'deploy/js/main.js' : ['deploy/js/main.js']
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                src: ['css/styles.css'],
                dest: 'deploy',
                ext: '.css'
            }
        },
        clean :  ['deploy/js/main.js', 'deploy/css/main.css']
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);
};