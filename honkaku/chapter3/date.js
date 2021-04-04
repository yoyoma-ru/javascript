var dat = new Date(2016, 11, 25, 11, 37, 15, 999);
console.log(dat);

console.log(dat.getFullYear());
console.log(dat.getMonth());
console.log(dat.getDate());
console.log(dat.getDay());
console.log(dat.getHours());

console.log(dat.getUTCFullYear());
console.log(dat.getUTCMonth());
console.log(dat.getUTCDate());


var dat2 = new Date();
dat2.setFullYear(2017);
dat2.setMonth(7);
dat2.setDate(5);

console.log(dat2.toLocaleString());
console.log(dat2.toUTCString());