// ===================================
// ejemplo async y await es8
// ===================================

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (err) {
        console.log(err);
    }
}

anotherFunction();

// ===================================
// ejemplo es9 
// ===================================

// (prpagacion de objetos)

const obj = {
    name: 'adri',
    age: 23,
    country: 'ES'
}

let { name, ...all} = obj;
console.log(all);

// añadir un objeto dentro de otro

const obj = {
    name: 'adri',
    age: 23,
}

const obj1 = {
    ...obj,
    country: 'ES'
}

console.log(obj1);

// saber cuando finaliza una funcion

const helloWorld= () => {
    return new Promise( (resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000) 
        : reject(new Error('Test Error'))
    })
}

helloWorld()
.then( res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log('finalizo')) // esto es lo que hace al finalizar la promesa

// agrupar bloques de expresiones regulares

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

// ===================================
// ejemplo es10 
// ===================================

// une todos la matriz en un unico array

let array = [1, 2, 3[1, 2, 3[1, 2, 3]]];

console.log(array.flat());

// mapea la matriz y edita los datos

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

// quita espacios al inicio

let str = '          hello world';

console.log(str.trimStart());

// quita espacios al final

let str = 'hello world          ';

console.log(str.trimEnd());

// transformar clave valor en un objeto

let entries = [['name', 'adri'], ['age', '23']];

console.log(Object.fromEntries(entries));











