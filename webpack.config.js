// entry point is - src/app.js
// output
// webpack.config.js file is just a node script
const path = require("path");

module.exports = env => {
  const isProduction = env === "production" ? true : false;

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"), // absolute path
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"] // since using both loaders, use "use"
        }
      ]
    },
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
