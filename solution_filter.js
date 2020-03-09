

// const rr= fs.readFile(process.argv[2],()=>{
//     const ss=rr.toString().split('\n')
//    console.log(ss.length-1);
// }

 
// );
// fs.readFile(process.argv[2], (err, rr) => {

//         const ss=rr.toString().split('\n');
//         console.log(ss.length-1);
    
//   });


var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}


