const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./example/index",
    split: "./example/split",
    diff: "./example/diff",
    highlight: "./example/highlight"
  },
  output: {
    path: path.join(__dirname, "example/static"),
    filename: "[name].js",
    publicPath: "/static/"
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    static: [path.join(__dirname, "example"), path.join(__dirname, "dist")],
    compress: true,
    port: 9000
  }
};
