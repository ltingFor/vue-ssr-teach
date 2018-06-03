const path = require('path')

module.exports={
  entry:path.join(__dirname,'./src/index.js'),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist/js')
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test:/\.styl/,
        use:[
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.(gif|jpg|png|svg|jpeg)$/,
        use:[
          'url-loader'
        ]
      }
    ]
  }
}