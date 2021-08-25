import {renderExitButton} from '../../ui/exitButton/exitButton.js';
import {elementCreator, elementAddClass} from '../../ui/handleDOM/handleDOM.js' ;
import {appendDetails} from '../../ui/detailView/userDetail.js'

export const handleUserClick = (event, userData, index) => {

    const detailsParent = document.querySelector('.details-container');
    const userSelectedContainer = (event.currentTarget);


    if(detailsParent.children.length !== 0) {
        detailsParent.innerHTML = ''
    }


    const {picture} = userData;
    const {large} = picture
    

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