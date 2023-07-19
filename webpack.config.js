const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  mode: "development",

  entry: "./src/index.jsx",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
      "process.env.API_KEY  ": JSON.stringify(process.env.API_KEY),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
};
