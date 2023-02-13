//import * as webpackDevServer from 'webpack-dev-server'
//import path from "path";
//import { Configuration } from "webpack";
//import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")
const path = require("path")
const Configuration = require("webpack")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

// https://webpack.js.org/loaders/node-loader/


const config: typeof Configuration = {
  entry: "./src/index.tsx",
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
};

export default config;
