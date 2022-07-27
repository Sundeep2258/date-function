let date1 = new Date();

console.log(date1.getFullYear()); // 1947
console.log(date1.getMonth()); // 7
console.log(date1.getDate());

let date2 = new Date(2012, 6, 27);
date2.setYear(2022);
date2.setDate(28);

console.log(date2);
console.log(date1);
