var msg = "𪛅る";
console.log(msg.length);

var len = msg.length;
var num = msg.split(/[\uD800-\uDBFF][\uDC00-\udFFF]/g).length -1;
console.log(msg.length - num);