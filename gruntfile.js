const mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       less: {
           dist: {
               files: {
                   'dist/css/style.css' : 'less/style.less'
               }
           }
       },
       imagemin: {
           dynamic: {
               files: [{
                   expand: true,
                   cwd: 'img/',
                   src: ['**/*.{png,jpg,gif}'],
                   dest: 'dist/'
               }]
           }
       },
       watch: {
           css: {
               files: 'less/style.less',
               tasks: ['less','imagemin']
           }
       },
       browserSync: {
           dev: {
               bsFiles: {
                   src : [
                       'dist/css/style.css',
                       'dist/*.html'
                   ]
               },
               options: {
                   watchTask: true,
                   server: './dist'
               }
           }
       }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['imagemin','browserSync','watch']);
}