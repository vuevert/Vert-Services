const path = require('path')
const webpack = require('webpack')

const babelConfig = {
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 3 versions", "> 2%", "ie >= 9", "Firefox >= 30", "Chrome >= 30"]
      },
      "modules": false,
      "loose": true
    }],
    "stage-2"
  ],
  "plugins": [
    "transform-runtime"
  ]
}

module.exports = {
  entry: {
    'index': resolve('./src/index.ts')
  },

  output: {
    path: resolve('./lib'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    library: 'VertService',
    libraryTarget: 'umd'
  },

  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      root: 'Vue'
    },

    'vue-router': {
      commonjs: 'vue-router',
      commonjs2: 'vue-router',
      root: 'VueRouter'
    },

    vuex: {
      commonjs: 'vuex',
      commonjs2: 'vuex',
      root: 'Vuex'
    },

    '@vert/core': {
      commonjs: '@vert/core',
      commonjs2: '@vert/core',
      root: 'Vert'
    }
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: babelConfig,
        exclude: /node_modules/
      }, {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
}

function resolve (filePath) {
  return path.resolve(__dirname, '../' + filePath)
}
