'use strict';

module.exports = function(grunt) {

    var paths = {
            src: './app',
            dest: './dist'
        },
        banner_string = '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n';

    grunt.initConfig({
        paths: paths,
        pkg: grunt.file.readJSON('package.json'),


        compass: {
            //https://github.com/gruntjs/grunt-contrib-compass
            dev: {
                options: {
                    sassDir: '<%= paths.src %>/sass',
                    cssDir: '<%= paths.dest %>/css',
                    relativeAssets: false,
                    noLineComments: true,
                    //imagesPath: '<%= paths.src %>/images/
                    raw: 'http_images_path = \"/static/dist/images/\"'
                }
            }
        },


        webfont: {
            //https://github.com/sapegin/grunt-webfont
            icons: {
                src: '<%= paths.src %>/svg/**/*.svg',
                dest: '<%= paths.src %>/fonts/icons',
                destCss: '<%= paths.src %>/sass/core/',
                options: {
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons',
                    //types: 'woff, ttf',
                    ligatures: false,
                    engine: 'node'
                }
            }
        },

        copy: {
            //https://github.com/gruntjs/grunt-contrib-copy
            main: {
                files: [
                    {expand: true, cwd: paths.src, src: [ '**/*' ], dest: paths.dest }
                ]
            }
        },

        //https://github.com/gruntjs/grunt-contrib-clean
        clean: [ paths.dest ],

        jshint: {
            //https://github.com/gruntjs/grunt-contrib-jshint
            all: [
                '<%= paths.src %>/js/**/*.js',
                '!<%= paths.src %>/js/vendors/**/*.js'
            ],
        },


        neuter: {
            options: {
                template: "{%= src %}",
                separator: '\n\n /* --------------------------- */ \n\n',
                includeSourceMap: false,
                skipFiles: ['wolfy87-eventemitter', 'eventie']
            },
            dev: {
                src: '<%= paths.src %>/js/app.js',
                dest: '<%= paths.dest %>/js/app.js'
            },
            vendors_head: {
                src: '<%= paths.src %>/js/vendors.head.js',
                dest: '<%= paths.dest %>/js/vendors.head.js'
            },
            vendors_foot: {
                src: '<%= paths.src %>/js/vendors.foot.js',
                dest: '<%= paths.dest %>/js/vendors.foot.js'
            }
        },

        watch: {
            //https://github.com/gruntjs/grunt-contrib-watch

            js: {
                files: ['<%= paths.src %>/js/**/*.js', 'Gruntfile.js'],
                tasks: [ 'jshint', 'neuter' ]
            },

            svg: {
                files: '<%= paths.src %>/svg/**/*.svg',
                tasks: [ 'webfont', 'compass', 'copy' ]
            },

            compass: {
                files: ['<%= paths.src %>/sass/**/*.scss', '<%= paths.src %>/sass/**/**/*.scss'],
                tasks: [ 'compass', 'copy' ],
                options: {
                    livereload: false
                }
            },

            copy: {
                files: [ '<%= paths.src %>/**/*' ],
                tasks: [ 'copy', 'neuter' ]
            },

            options: {
                atBegin: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-neuter');


    grunt.registerTask('default', [ 'clean', 'jshint', 'webfont', 'compass', 'copy', 'neuter']);

};
