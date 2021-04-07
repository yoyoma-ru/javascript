var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = "サポートサイトはhttp://www.wings.msn.to/です";
str += "サンプルサイトHTTP://www.web-deli.com/もよろしく！";
console.log(str);
var result = str.match(p);
for(var i =0, len=result.length; i<len; i++){
	console.log(result[i]);
}