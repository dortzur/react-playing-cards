const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const externals = isDev
  ? {}
  : {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
    },
  };
module.exports = {
  entry: isDev ? './demo/index.tsx' : './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'reactPlayingCards',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.jsx', '.tsx'],
  },
  externals,
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              namedExport: true,
              camelCase:true,
              modules: true,
              localIdentName: 'rpc__[local]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './demo/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
