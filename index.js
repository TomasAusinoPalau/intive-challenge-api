

const API_RESULTS_1 = 50;
let dataRandomUsers = [];


const url = `https://randomuser.me/api/?results=${API_RESULTS_1}`;

const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dataRandomUsers = data.results;

    userGenerator()
};



const userGenerator = () => {
    for (let i = 0; i < dataRandomUsers.length; i++) {
        generateUser(i);
    };
}

const generateUser = (index) => {

    // user data
    const user = dataRandomUsers[index];
    const { name, picture, location } = user;
    const { title, first, last } = name;
    const {large, medium, thumbnail} = picture;
    const {city, state} = location;

    const parentElement = document.querySelector('.main-container');
    const userElement = document.createElement('div');
    const userThumbnailContainer = document.createElement('picture');
    
    
    // user elements to append
    const userNameElement = document.createElement('p');
    const userLocationElement = document.createElement('p');
    const userThumbnailElement = document.createElement('img');




    // user data manipulation and styles
    userNameElement.innerHTML = `${title} ${first} ${last}`;
    userLocationElement.innerHTML = `${city}, ${state}`;
    userThumbnailElement.src = `${thumbnail}`;





    // user-container manipulation and styles
    userElement.onclick = (event) => {console.log(event.target)/*function to manipulate user and view details*/};
    userElement.classList.add('user-container');


    userNameElement.classList.add('user-name');
    userLocationElement.classList.add('user-location');
    userThumbnailContainer.classList.add('user-thumbnail-container');
    


    // append elements
    userThumbnailContainer.appendChild(userThumbnailElement)

    userElement.appendChild(userThumbnailContainer)
    userElement.appendChild(userNameElement);
    userElement.appendChild(userLocationElement);

    parentElement.appendChild(userElement);

}

fetchApi()
