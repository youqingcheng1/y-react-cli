const {
  override,
  setWebpackPublicPath,
  disableEsLint
} = require("customize-cra");

process.env.GENERATE_SOURCEMAP = "false"; //打包不生成sourceMap

const configureWebpack = () => (config) => {
  config.plugins[0].options.env = process.env.NODE_ENV;
  if (process.env.NODE_ENV === "production") {
    config.plugins[0].options.minify = {
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      collapseWhitespace: true,
    };
    const path = require("path");
    const paths = require("react-scripts/config/paths");
    paths.appBuild = path.join(path.dirname(paths.appBuild), "dist");
    config.output.path = path.join(path.dirname(config.output.path), "dist");
  } else {
    console.log("走的本地");
  }
  return config;
};

module.exports = {
  webpack: override(
    configureWebpack(),
    disableEsLint(),
    process.env.NODE_ENV === "production"
      ? setWebpackPublicPath(
          process.env.REACT_APP_REALEASE === "test" ? "ceshifu" : "zhenshifu"
        )
      : setWebpackPublicPath("./")
  ),
};