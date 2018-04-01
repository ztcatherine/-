var fs = require('fs');
fs.writeFile('hello.txt','我是写入的内容',function (err) {
  if(!err){
    console.log('写入成功~~');
  }
});