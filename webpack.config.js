const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "witcher-names.js",
    library: "witcherNames",
    libraryTarget: "umd"
  }
};
