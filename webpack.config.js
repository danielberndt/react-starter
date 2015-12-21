var path = require("path");
var autoprefixer = require("autoprefixer");

var srcPath = path.join(__dirname, "src");

module.exports = {
  context: srcPath,
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint", include: srcPath}
    ],
    loaders: [
      {test: /\.jsx?$/, loader: "babel", include: srcPath},
      {test: /\.css$/, loader: "style!css!postcss"},
      {test: /\.(png|jpg|svg)([\?#].*)?$/, loader: "file?name=[name]-[md5:hash:base62:8].[ext]"},
      {test: /\.(eot|ttf|woff2?)([\?#].*)?$/, loader: "file?name=[name]-[md5:hash:base62:8].[ext]"}
    ]
  },
  devtool: "eval",
  postcss: [autoprefixer({browsers: ["last 2 versions"]}), require("csswring")],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: srcPath,
    stats: {
      chunkModules: false,
      colors: true
    }
  }
};
