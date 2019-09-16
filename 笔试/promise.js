console.log(1)

setTimeout(() => {
  console.log(7)
})

let p = new Promise((resolve, reject) => {
  console.log(2)
  reject(3)
  resolve(4)
  console.log(5)
}).then((e) => {
  console.log(e)
}).catch(e => {
  console.log(e)
})

console.log(6)