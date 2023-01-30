//Comparison to callbacks 
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //Can only call resolve or reject.  Can only call resolve/reject one time
        // resolve([4, 12, 18]) // success
        reject ('This is my error') //failure
        // reject ('This is my error') //failure
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success:', result)
}).catch((error) => {
    console.log('Error:', error)
})

//
//                           fulfilled
//                          /
// Promise  -- pending --->
//                          \
//                           rejected