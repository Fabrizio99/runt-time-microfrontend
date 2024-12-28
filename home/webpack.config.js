const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
    hot: true,
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js", // Ensures the ES module build is used
    },
    extensions: [".js", ".vue"], // Resolve these file extensions
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader", // Processes .vue files
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    clean: true, // Clean output directory before each build
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeApp": "./src/bootstrap",
      },
      shared: ["lodash"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
