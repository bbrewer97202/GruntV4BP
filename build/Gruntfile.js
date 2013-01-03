module.exports = function(grunt) {

  /**********************************************************************************
   * configuration
   *********************************************************************************/
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: {
      jsSrc: "../js",
      jsDest: "../www/js",
      cssSrc: "../sass",
      cssDest: "../www/css"
    },    
    jshint: {
      src: ['Gruntfile.js', '<%= paths.jsSrc %>/src/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        src: '<%= paths.jsDest %>/script.js',
        dest: '<%= paths.jsDest %>/script.js'
      }
    },
    concat: {
      script: {
        src: ['<%= paths.jsSrc %>/src/*.js'],
        dest: '<%= paths.jsDest %>/script.js'
      },  
      lib: {
        src: ['<%= paths.jsSrc %>/lib/jquery-1.8.3.min.js', '<%= paths.jsSrc %>/lib/jquery.*.js'],
        dest: '<%= paths.jsDest %>/lib.js'
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: '<%= paths.cssSrc %>',
          cssDir: '<%= paths.cssDest %>',
          imagesDir: '../images',
          environment: 'production',
          outputStyle: 'compressed',
          noLineComments: true,
          force: true,
          relativeAssets: false
        }
      },
      dev: {
        options: {
          sassDir: '<%= paths.cssSrc %>',
          cssDir: '<%= paths.cssDest %>',
          imagesDir: '../images',
          outputStyle: 'expanded',
          noLineComments: false,
          force: false,
          relativeAssets: false
        }
      }
    },    
    watch: {
      scripts: {
        files: '<%= jshint.src %>',
        tasks: ['jshint', 'concat:script']
      },
      compass: {
        files: '<%= paths.cssSrc %>/*',
        tasks: ['compass:dev']        
      }
    }    
  });
  
  /**********************************************************************************
   * load plugins
   *********************************************************************************/
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /**********************************************************************************
   * tasks
   *********************************************************************************/
  grunt.registerTask('default', ['jshint', 'concat', 'compass:dev']);
  grunt.registerTask('production', ['jshint', 'concat', 'uglify', 'compass:dist']);

};
