const API_RESULTS_1 = 50;
let dataRandomUsers = [];


const url = `https://randomuser.me/api/?results=${API_RESULTS_1}`;

const fetchAPI = async () => {
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
    const {thumbnail} = picture;
    const {city, state} = location;

    const parentElement = document.querySelector('.main-container');
    const userElement = document.createElement('div');
    const userPictureContainer = document.createElement('picture');
    
    
    // user elements to append
    const userNameElement = document.createElement('p');
    const userLocationElement = document.createElement('p');
    const userThumbnailElement = document.createElement('img');




    // user elements manipulation and styles
    userNameElement.innerHTML = `${title} ${first} ${last}`;
    userLocationElement.innerHTML = `${city}, ${state}`;
    userThumbnailElement.src = `${thumbnail}`;





    // user-container manipulation and styles

    userElement.onclick = (event) => {handleClick(event.target, index)};
    userElement.classList.add('user-container');

    userNameElement.classList.add('user-name');

    userLocationElement.classList.add('user-location');

    userPictureContainer.classList.add('user-picture-container');
    userThumbnailElement.classList.add('user-thumbnail')
    


    // append elements
    userPictureContainer.appendChild(userThumbnailElement)

    userElement.appendChild(userPictureContainer)
    userElement.appendChild(userNameElement);
    userElement.appendChild(userLocationElement);

    parentElement.appendChild(userElement);

}

const handleClick = (event, index) => {

    // handle if click is on thumbnail or text, and select properly the container
    const thumbnailUserClass = 'user-thumbnail';
    const thumbnailClick = event.parentNode.parentNode
    const textClick = event.parentNode
    const userSelectedContainer = (event.className === thumbnailUserClass) ? thumbnailClick : textClick;
    const userData = dataRandomUsers[index];
    const detailsParent = document.querySelector('.details-container');


    const { name, picture, location } = userData;
    const {large} = picture

    

    
    // user details to display
    
    const userDetailsElements = userSelectedContainer.cloneNode(true);
    const userDetailsExit = document.createElement('button');
    const userPictureContainer = document.createElement('picture');
    const userImgElement = document.createElement('img');
    userImgElement.src = large;
    

    // user details manipulation and styles
        detailsParent.classList.remove('hidden')
    userDetailsElements.classList.add('user-details');
    userDetailsExit.classList.add('user-details-exit');


    // append elements
    userPictureContainer.appendChild(userImgElement);
    userDetailsElements.insertBefore(userDetailsExit, userDetailsElements.firstChild);
    userDetailsElements.replaceChild(userPictureContainer, userDetailsElements.querySelector('.user-picture-container'))
    detailsParent.appendChild(userDetailsElements)

}

fetchAPI()
