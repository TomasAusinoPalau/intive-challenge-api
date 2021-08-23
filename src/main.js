let API_RESULTS_1 = 50;
let dataRandomUsers


const url = `https://randomuser.me/api/?results=${API_RESULTS_1}`;

const fetchAPI = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dataRandomUsers = data.results

    userGenerator()
};



const userGenerator = () => {
    for (let i = 0; i < dataRandomUsers.length; i++) {
        generateUser(i, dataRandomUsers[i]);
    };
}

const generateUser = (index, user) => {
        


    const userData = user;
    const { name, picture, location } = userData;
    const { title, first, last } = name;
    const {thumbnail} = picture;
    const {city, country} = location;

    const parentElement = document.querySelector('.main-container');
    
    

    const userElement = elementCreator('div');
    const userNameElement = elementCreator('p')
    const userLocationElement = elementCreator('p');
    const userPictureElement = elementCreator('picture');
    const userThumbnailElement = elementCreator('img');
    const userSeparatorElement = elementCreator('hr');





    userNameElement.innerHTML = `${title} ${first} ${last}`;
    userLocationElement.innerHTML = `${city}, ${country}`;
    userThumbnailElement.src = `${thumbnail}`;





    elementAddClass(userNameElement, 'user-name')
    elementAddClass(userElement, 'user-container')
    elementAddClass(userLocationElement, 'user-location')
    elementAddClass(userPictureElement, 'user-picture-container')
    elementAddClass(userThumbnailElement, 'user-thumbnail')
    elementAddClass(userSeparatorElement, 'user-separator')


    userElement.onclick = (event) => {handleUserClick(event, index)};

    
    
    userPictureElement.appendChild(userThumbnailElement)

    userElement.appendChild(userPictureElement)
    userElement.appendChild(userNameElement);
    userElement.appendChild(userLocationElement);
    userElement.appendChild(userSeparatorElement);
    
    parentElement.appendChild(userElement);

}

const handleUserClick = (event, index) => {

    const userData = dataRandomUsers[index];
    const detailsParent = document.querySelector('.details-container');
    
    const thumbnailUserClass = 'user-thumbnail';
    const userSelectedContainer = (event.currentTarget);


    if(detailsParent.children.length !== 0) {
        detailsParent.innerHTML = ''
    }


    const { name, picture, location, email, login } = userData;
    const {large} = picture
    const {username} = login

    

    

    const userDetailsElements = userSelectedContainer.cloneNode(true);
    const userUsernameElement = elementCreator('p');
    const userEmailElement = elementCreator('p');
    const userPictureContainer = elementCreator('picture');
    const userImgElement = elementCreator('img');
    userImgElement.src = large;
    


    detailsParent.classList.remove('hidden')
    elementAddClass(userDetailsElements, 'user-details');
    elementAddClass(userUsernameElement, 'user-username');
    elementAddClass(userEmailElement, 'user-email');
    elementAddClass(userPictureContainer, 'user-picture-container');
    elementAddClass(userImgElement, 'user-picture');

    renderExitButton()



    appendDetails({
                userDetails: userData,
                parentElement: detailsParent,
                baseElement: userDetailsElements,
                usernameElement: userUsernameElement, 
                emailElement: userEmailElement,
                pictureContainer: userPictureContainer,
                imageElement: userImgElement
            });

    


}

const elementCreator = (element) => {
    return document.createElement(element);
}


function elementAddClass(element, className) {

    element.classList.add(className);
}

const renderExitButton = () => {
    const exitButton = document.querySelector('.exit-button');
    const exitIcon = document.querySelector('.exit-icon');
    exitButton.classList.contains('hidden') ? exitButton.classList.remove('hidden') : exitButton.classList.add('hidden');
    exitIcon.classList.contains('hidden')   ? exitIcon.classList.remove('hidden') : exitIcon.classList.add('hidden');

    exitButton.onclick = event => {handleExitButton(event)};    
}



const handleExitButton = (event) => {
    const detailsParent = document.querySelector('.details-container');
    detailsParent.classList.add('hidden')
    detailsParent.innerHTML = ''
    renderExitButton()

}

const appendDetails = (details) => {
    const {userDetails, parentElement, baseElement, usernameElement, emailElement, pictureContainer, imageElement } = details;
    const {picture, email, login} = userDetails;
    const {username} = login
    const {large} = picture;
    


    usernameElement.innerHTML = `Username: ${username}`;
    emailElement.innerHTML = `Email: ${email}`;
    imageElement.src = `${large}`;
    imageElement.alt = `${username}`;
    imageElement.title = `${username}`;

    pictureContainer.appendChild(imageElement)
    baseElement.removeChild(baseElement.querySelector('.user-picture-container'))
    baseElement.appendChild(usernameElement);
    baseElement.appendChild(emailElement);
    baseElement.appendChild(pictureContainer);
    parentElement.appendChild(baseElement);
}

fetchAPI()
