"use static";

module.exports = {
  devtool: "inline-source-map",
  entry: "./main.py",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.py$/,
        loader: "transcrypt-loader",
        options: {},
      },
    ],
  },
};
