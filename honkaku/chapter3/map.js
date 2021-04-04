let m = new Map();
m.set("dog", "ワンワン");
m.set("cat", "ニャーニャー");
m.set("mouse", "チューチュー");

console.log(m.size);
console.log(m.get("dog"));
console.log(m.has("cat"));

for(let key of m.keys()){
	console.log(key);
};
for(let value of m.values()){
	console.log(value);
}
for(let [key, value] of m){
	console.log(key+value);
}

m.delete("dog");
console.log(m.size);

m.clear();
console.log(m.size);