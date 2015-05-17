module.exports = function (grunt) {

  /**
   * Configuration.
   */

  grunt.initConfig({

    jshint: {
      javascript: ['components.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },
    uglify: {
      default: {
        options: {
          sourceMap: 'components.min.map',
          sourceMappingURL: 'components.min.map'
        },
        files: {
          'components.min.js': 'components.js'
        }
      }
    }
  });

  /**
   * Tasks.
   */

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('default', ['jshint', 'uglify']);
};