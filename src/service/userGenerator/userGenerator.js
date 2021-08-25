import {elementCreator, elementAddClass} from '../../ui/handleDOM/handleDOM.js' ;
import {handleUserClick} from '../handleClick/handleClick.js'

const userGenerator = (dataUsers) => {
    for (let i = 0; i < dataUsers.length; i++) {
        generateUser(i, dataUsers[i]);
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


    userElement.onclick = (event) => {handleUserClick(event, userData, index)};

    
    
    userPictureElement.appendChild(userThumbnailElement)

    userElement.appendChild(userPictureElement)
    userElement.appendChild(userNameElement);
    userElement.appendChild(userLocationElement);
    userElement.appendChild(userSeparatorElement);
    
    parentElement.appendChild(userElement);

}


export {userGenerator}