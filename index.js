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
    const userElement = elementCreator('div');
    const userPictureContainer = elementCreator('picture');
    
    
    // user elements to append
    const userNameElement = elementCreator('p')
    const userLocationElement = elementCreator('p');
    const userThumbnailElement = elementCreator('img');
    const userSeparatorElement = elementCreator('hr');




    // user elements manipulation and styles
    userNameElement.innerHTML = `${title} ${first} ${last}`;
    userLocationElement.innerHTML = `${city}, ${state}`;
    userThumbnailElement.src = `${thumbnail}`;





    // user-container manipulation and styles

    userElement.onclick = (event) => {handleUserClick(event.target, index)};
    userElement.classList.add('user-container');

    userNameElement.classList.add('user-name');
    userSeparatorElement.classList.add('user-separator');

    userLocationElement.classList.add('user-location');

    userPictureContainer.classList.add('user-picture-container');
    userThumbnailElement.classList.add('user-thumbnail')
    


    // append elements
    userPictureContainer.appendChild(userThumbnailElement)

    userElement.appendChild(userPictureContainer)
    userElement.appendChild(userNameElement);
    userElement.appendChild(userLocationElement);
    userElement.appendChild(userSeparatorElement);

    parentElement.appendChild(userElement);

}

const handleUserClick = (event, index) => {

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
    const userPictureContainer = elementCreator('picture');
    const userImgElement = elementCreator('img');
    userImgElement.src = large;
    

    // user details manipulation and styles
    detailsParent.classList.remove('hidden')
    userDetailsElements.classList.add('user-details');

    // exit button in header
    renderExitButton()


    // append elements
    userPictureContainer.appendChild(userImgElement);
    userDetailsElements.replaceChild(userPictureContainer, userDetailsElements.querySelector('.user-picture-container'))
    detailsParent.appendChild(userDetailsElements)
    
}


const renderExitButton = () => {
    const exitButton = document.querySelector('.exit-button');
    const exitIcon = document.querySelector('.exit-icon');
    exitIcon.classList.contains('hidden') ? exitIcon.classList.remove('hidden') : exitIcon.classList.add('hidden');
    exitButton.classList.contains('hidden') ? exitButton.classList.remove('hidden') : exitButton.classList.add('hidden');

    exitButton.onclick = event => {handleExitButton(event)};
    
}

const elementCreator = (element) => {
    return document.createElement(element);
}


const handleExitButton = (event) => {
    const detailsParent = document.querySelector('.details-container');
    detailsParent.classList.add('hidden')
    detailsParent.innerHTML = ''
    renderExitButton()

}


fetchAPI()
