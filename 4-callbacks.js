// setTimeout(() => {
//   console.log('Two seconds are up')
// }, 2000)

// const names = ['CJ', 'Lyla', 'Evangeline', 'Camden']
// const shortNames = names.filter((name) => {
//   return names.length <= 4
// })

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }
//     callback(data)
//   }, 2000)
// }

// geocode('Philadelphia', (d) => {
//   console.log(d)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callbackFx) => {
  setTimeout(() => {
    const total = x + y
    console.log('two seconds are up')
    callbackFx(total)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log('1 + 4 =', sum) // Should print: 5
})
