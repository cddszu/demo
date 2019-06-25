const obj = {}, arr = [];
console.time('赋值')
for (let i = 0; i < 100000; i ++) {
  obj[i] = i;
  arr.push(i);
}
console.timeEnd('赋值')

console.time('数组遍历')
console.log(arr[5000])
console.timeEnd('数组遍历')

console.time('对象遍历')
console.log(obj[5000])
console.timeEnd('对象遍历')

