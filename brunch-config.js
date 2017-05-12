'use strict';

module.exports = {

  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        // 'app.css': path => path.endsWith('.css'),
        'app.css': /\.css$/,
        'vendor.css': /^node_modules\//
      }
    }
  },

  npm: {
    styles: {
      'normalize.css': ['normalize.css']
    }
  },

  plugins: {
    babel: {
      presets: ['latest', 'es2015', 'react']
    }
  },

  server: {
    // port: Number.parseInt(process.env.PORT) || 8000
    command: 'nodemon --ignore app --ignore public server.js'
  }

};
