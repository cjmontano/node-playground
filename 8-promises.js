//Comparison to callbacks 
// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Can only call resolve or reject.  Can only call resolve/reject one time
//         resolve([4, 12, 18]) // success
//         // reject ('This is my error') //failure
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success:', result)
// }).catch((error) => {
//     console.log('Error:', error)
// })

//
//                           fulfilled
//                          /
// Promise  -- pending --->
//                          \
//                           rejected

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1,3).then((sum) => {
//     console.log(sum)
//     add(2,11).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log("Error in inner add")
//     })
// }).catch((e) => {
//     console.log('Error in outer add')
// })

add(1,3).then((sum) => {
    console.log(sum)
    return add(sum, 4) // This allows promise chaining
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})