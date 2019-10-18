const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Stuff',
        //     age: 26
        // })
        reject('Something went wrong!')
    }, 5000)
})

console.log('before')

promise.then((data) => {
    console.log(data)
})

console.log('after')