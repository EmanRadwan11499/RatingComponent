# Frontend Mentor - Interactive rating component

This is a solution to [interactive rating component coding challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)

### The challenge Description

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [solution link](https://www.frontendmentor.io/solutions/rating-component-with-css-and-js-M92JI7k3wU)
- Live Site URL: [live demo link](https://emanradwan114.github.io/RatingComponent/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### Steps I followed

- Build the UI using HTML & CSS
- Start working with JavaScript as follows:

1. checking if there is any saved rating value in local storage, and if there is a value, mark it by changing its backgroundColor
2. if user selects a rating value, its backgroundColor will be changed
3. when the user clicks on submit, the browser will check if he selects a rating value or not
4. if he selects a rating value, the rating part is hiden & a thank you msg is shown to him
   if he did not select a value, an error msg is shown to him
5. the rating value will be stored in the local storage
   so, when the user opens the site again, the previous selected value is shown to him,
   and he is able to edit his selection and submit the new rating value
