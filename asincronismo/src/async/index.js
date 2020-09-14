const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Do Something Async')
            }, 3000)
            : reject(new Error('test error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


const anotherfucntion = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (err) {
        console.error(err);

    }
}

console.log('Before 1');
anotherfucntion();
console.log('After 1');