module.exports = {
  entry: './src/App.js',

  output: {
    path: __dirname,
    filename: 'app.js'
  },

  devServer: {
    inline: true,
    port: 7777,
    historyApiFallback: true
  },
  devtool: "source-map",
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  }
};