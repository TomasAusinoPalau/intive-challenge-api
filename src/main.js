import {userGenerator} from './service/userGenerator/userGenerator.js'

let API_RESULTS_1 = 50;
let dataRandomUsers


const url = `https://randomuser.me/api/?results=${API_RESULTS_1}`;

const fetchAPI = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dataRandomUsers = data.results
    userGenerator(dataRandomUsers)
};


export {fetchAPI}


