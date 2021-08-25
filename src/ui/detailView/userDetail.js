export const appendDetails = (details) => {
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