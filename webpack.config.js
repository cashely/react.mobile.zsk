var webpack = require('webpack');

module.exports = {
  entry:{
    index:'./entry.js'
  },
  output:{
    path:__dirname + '/js/',
    filename:'app.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loaders:['jsx','babel?presets[]=react,presets[]=es2015'],
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        loaders:['style','css'],
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
        //以上变量‘$super’, ‘$’, ‘exports’ or ‘require’，不会被混淆
      },
      compress: {
        warnings: false
      }
    })
  ]
}
