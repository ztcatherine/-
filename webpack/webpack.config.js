module.exports = {
  entry: './src/js/entry.js',//入口路径
  output: {
    path: __dirname+'/build/js/',//输出路径
    filename: 'build.js'//输出文件名
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ]
  },
  devServer:{
    contentBase:"./build",
    historyApiFallback:true,
    inline:true
  }
};