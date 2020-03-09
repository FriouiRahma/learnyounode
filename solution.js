// const http = require(http);
// http.get("https://ada.gomycode.tn/checkpoints/069a551a-676b-4089-8813-e78d20f544da", (resp) => {
//     let data = '';
//     resp.setEncoding('utf8');
//     resp.on(data, chunk => {
//         data += chunk

//     })



// })
// let s=0;
// let args=Number(process.argv.map((el,i)   => i>=2 && (s+= Number(el))  ))
// console.log(s)
// const fs = require('fs');
// const rr= fs.readFileSync(process.argv[2]);
// const ss=rr.toString().split('\n');
// console.log(ss.length);
// fs.readFile(process.argv[2], (err, rr) => {

//     const ss=rr.toString().split('\n');
//     console.log(ss.length-1);

// });
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
