var ary = [5, 25, 10];
var ary2 = [25, 10, 5];
console.log(ary.sort());

console.log(ary.sort(function(x, y){
	return x - y;
}));

console.log(ary2.sort(function(x, y){
	return x - y;
}));



var classes = ["部長", "課長", "主任", "担当"];
var members = [
	{ name: "鈴木清子",  clazz: "主任"},
	{ name: "山口達郎", clazz: "部長"},
	{ name: "井上太郎", clazz: "担当"},
	{ name: "和田明美", clazz: "課長"},
	{ name: "井森雄太", clazz: "担当"}
];
console.log(members.sort(function(x, y){
	return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));