const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',

  entry: {
    'index': resolve('./src/index.ts')
  },

  output: {
    path: resolve('./lib'),
    filename: '[name].js',
    library: 'VertServices',
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
        exclude: /node_modules/
      }, {
        test: /\.ts$/,
        use: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}

function resolve (filePath) {
  return path.resolve(__dirname, '../' + filePath)
}
