# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned that it is not always the solution to map through and object that other methods can be used depending on the desired outcome. Initially i used the map method to extract the data in the object into my UI but i did not get the desired result as rendered the two objects. So I used index of the object items to control the state to get the desired result.


```js/react
const [changeReview, setChangeReview] = useState(0)

  // Handlers
  function App() {
  function handleNextReview() {
    setChangeReview((reviewIndex) => {
      return reviewIndex === review.length - 1 ? 0 : reviewIndex + 1
    })
  }

  function handlePrevReview() {
    setChangeReview((reviewIndex) => {
      return reviewIndex === 0 ? review.length - 1 : reviewIndex - 1
    })
  }
  return (
    <main className="App">
      <Testimonials
        image={review[changeReview].image}
        feedback={review[changeReview].feedback}
        name={review[changeReview].name}
        role={review[changeReview].role}
        onAddNext={handleNextReview}
        onAddPrev={handlePrevReview}
      />
    </main>
  );
}
```

## Author

- Frontend Mentor - [@Nneoma](https://www.frontendmentor.io/profile/SatellitePeace)
