const fetchData = require('../utlis/fetch-data');
const API = 'https://rickandmortyapi.com/api/character/';


const apiCall = async () => {
    try {
        const data1 = await fetchData(API);
        console.log(data1.info.count);
        const data2 = await fetchData(API + data1.results[0].id);
        console.log(data2.name);
        const data3 = await fetchData( data2.origin.url);
        console.log(data3.dimension);
    } catch (err) {
        console.error(err);
    }
}

apiCall();
