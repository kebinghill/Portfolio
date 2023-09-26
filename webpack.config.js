const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
    hashFunction: "xxhash64",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
