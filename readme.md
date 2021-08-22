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
