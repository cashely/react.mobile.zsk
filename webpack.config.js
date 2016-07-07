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
  }
}
