const packageJSON = require('./package.json');
const semver = require('semver'); // eslint-disable-line
const loadGruntTasks = require('load-grunt-tasks'); // eslint-disable-line
const pixrem = require('pixrem'); // eslint-disable-line
const autoprefixer = require('autoprefixer'); // eslint-disable-line

if (!semver.satisfies(process.versions.node, packageJSON.engines.node)) {
  console.error( // eslint-disable-line
    `Invalid Node.js version. You need to be using ${packageJSON.engines.node}. ` +
    'If you want to manage multiple Node.js versions try https://github.com/creationix/nvm'
  );

  process.exit(1);
}

module.exports = (grunt) => {
  loadGruntTasks(grunt);

  grunt.initConfig({
    proj: {
      script_src: 'src/script',
      style_src: 'src/style',
      dist: 'dist',
    },

    sass: {
      theme: {
        options: {
          style: 'compressed',
          unixNewlines: true,
        },
        files: [{
          expand: true,
          cwd: '<%= proj.style_src %>',
          src: ['*.scss'],
          dest: '<%= proj.dist %>',
          ext: '.css',
        }],
      },
    },

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: '<%= proj.dist %>',
        },
        processors: [
          pixrem,
          autoprefixer({ browsers: 'last 2 versions' }),
        ],
      },
      dist: {
        src: '<%= proj.dist %>/*.css',
      },
    },

    browserify: {
      dist: {
        src: [
          '<%= proj.script_src %>/index.js',
        ],
        dest: '<%= proj.dist %>/application-menu.js',
        options: {
          transform: [['babelify', { presets: ['env'] }]],
        },
      },
    },

    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= proj.dist %>',
          src: '*.js',
          dest: '<%= proj.dist %>',
        }],
      },
    },

    watch: {
      build: {
        files: [
          '<%= proj.style_src %>/{,*/}*.scss',
          '<%= proj.script_src %>/{,*/}*.js',
        ],
        tasks: ['sass', 'postcss', 'notify'],
        options: {
          livereload: true,
        },
      },
    },

    notify: {
      build: {
        options: {
          message: 'Build successful!',
        },
      },
    },
  });

  grunt.registerTask('build', [
    'sass',
    'postcss',
    'browserify',
    'uglify',
    'notify',
  ]);

  grunt.registerTask('build:watch', [
    'sass',
    'postcss',
    'browserify',
    'uglify',
    'notify',
    'watch:build',
  ]);
};
