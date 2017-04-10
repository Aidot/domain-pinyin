var config = {
	npin: 3, //拼音组合数，如2拼、3拼
	filename: 'test', //input目录下的csv/txt文件名
	date: new Date().toISOString().slice(0,10)
};

var csv = require("fast-csv");
var fs = require('fs')
var logger = fs.createWriteStream('./output/'+config.filename+'-'+config.date+'.csv', {
  flags: 'a' // 'a' means appending (old data will be preserved)
});

var nodejieba = require("nodejieba");
nodejieba.load({
  userDict: './pinyin.utf8',
});

var _c = 0;
csv
 .fromPath('./input/'+config.filename+'.csv')
 .on("data", function(data){
   var domain = data[0].toString();
   var result = nodejieba.tag(domain);
   var num = 0;
   for (var i = 0; i < result.length; i++) {
     if (result[i]['tag']=='eng' || result[i]['tag']=='x') break;
     if (result[i]['tag']=='py') {
       num = i+1
     };
   };
   if (num == result.length && num <= 3) {
     _c ++
     console.log(_c, domain);
     logger.write(domain+ ',' + data[1] + '\n')
   }
	 
 })
 .on("end", function(){
     console.log("Done...");
 });