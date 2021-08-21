

const API_RESULTS_1 = 50
let dataRandomUsers = [];



const url = `https://randomuser.me/api/?results=${API_RESULTS_1}`;
const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dataRandomUsers = data.results;
    userGenerator()
};

const generateUser = (index) => {

    const user = dataRandomUsers[index];
    const { name, picture } =user;
    const { title, first, last } = name;

    console.log(user)
}

const userGenerator = () => {
    for (let i = 0; i < dataRandomUsers.length; i++) {
        generateUser(i);
    };
}

fetchApi()
