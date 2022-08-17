const fs = require('fs')
// async function test() {
//  const data = await fs.readFileSync('./a.js')
//     console.log(data.toString('utf-8'),'data')
// }
test()
console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')