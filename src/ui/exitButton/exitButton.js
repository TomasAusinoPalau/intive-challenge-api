export const renderExitButton = () => {
    const exitButton = document.querySelector('.exit-button');
    const exitIcon = document.querySelector('.exit-icon');
    exitButton.classList.contains('hidden') ? exitButton.classList.remove('hidden') : exitButton.classList.add('hidden');
    exitIcon.classList.contains('hidden')   ? exitIcon.classList.remove('hidden') : exitIcon.classList.add('hidden');

    exitButton.onclick = event => {handleExitButton(event)};    
};



const handleExitButton = (event) => {
    const detailsParent = document.querySelector('.details-container');
    detailsParent.classList.add('hidden')
    detailsParent.innerHTML = ''
    renderExitButton()

};