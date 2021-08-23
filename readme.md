# Intive challenge API

Using Random User API (randomuser.me) I have to develop a Master/Detail flow with the following features:
- At least 50 users provided by the API
- Users must be provided with small picture, full name, city and country.
- When you tap on the user on the grid, it shows the detail view with big picture and more details.

## Solving the challenge

I develop, first of all, the `fetchAPI`, with an asyncronous method. Then, with vanilla JS, I generated an array of users from the API.

With that array, using a loop, I made a grid of users with thumbnail, name and location.

I didn't use jQuery to generate the grid in the DOM, because I consider it a bad practice. But it would have been a good option to save time, and solve it in less lines of code.

At this point, with the grid, I can use the `onClick` event to open the detail view from an specific selected user and manipulate his properties, through the `dataRandomUser[index]`. The `handleClick` function recives the event and shows the detail view.

When all this things were settled, I can start the detail view with the user's picture, name and location.

Developer features that i used:
- Vanilla JS
- material.io
- Google Fonts
- Mobile First
- Responsive Design


I founded few problems that limited myself to keep the code clean and simple.

- I couldn't divide the code in different files, because I didn't know how to modularize the code in different little archives. But i tried to simplify readability with few functions.
- I could make a infinite scroll, but I find troubles in the API request and the way how I handle the data, so every time I scroll down and call the api for new random users, it overwrite and modify the array `dataRandomUsers` and its original index positions.
- I cannon't control the `exitButton` class 'hidden', in a way that also allows (if the user is in desktop view) select other user directly from the grid. When that happens, the `exitButton` dissapears. If the user is with the phone rotated (desktop view) and after selected a second user rotates the phone, he cannon't see the exit button, because the `exitButton` is hidden, the user will go back to the grid, but the button is not visible.


## Final thoughts

I think that in more time I would made a better handle of the data, and a better way to handle the API request, plus the possibility to make a infinite scroll. 