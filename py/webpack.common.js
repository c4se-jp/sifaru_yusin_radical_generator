"use static";

module.exports = {
  entry: {
    main: "./main.py",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.m?js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["@babel/plugin-proposal-class-properties"],
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.py$/,
        use: [
          {
            loader: "transcrypt-loader",
            options: {},
          },
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}/docs`,
  },
  plugins: [],
  resolve: {
    alias: {
      fs: `${__dirname}/fs`,
    },
  },
  target: "web",
};
