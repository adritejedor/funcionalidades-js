const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('somethingWillHappen')
        } else {
            reject(new Error('entro al reject 1'))
        }
    })
} 

somethingWillHappen()
.then((res) => console.log(res))
.catch((err) => console.log(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('somethingWillHappen2')
            }, 3000);
        } else {
            reject(new Error('entro al reject 2'))
        }
    })
} 
somethingWillHappen2()
.then((res) => console.log(res))
.catch((err) => console.log(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then((res)=> {
    console.log('array de resultados', res);
})
.catch((err) => {
    console.error(err);
})