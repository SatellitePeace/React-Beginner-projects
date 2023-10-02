import "../src/index.css"
import john from "./images/image-john.jpg"
import tanya from "./images/image-tanya.jpg"
import arrowPrev from "./images/icon-prev.svg"
import arrowNext from "./images/icon-next.svg"
import { useState } from "react"

const review = [
  {
    feedback: " “ I have been interested in coding for a while but never taken the jump, until now. I could not recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
    name: "Tanya Sinclair",
    role: "UX Engineer",
    image: tanya,
  },
  {
    feedback: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    image: john,
  },
]

function App() {
  const [changeReview, setChangeReview] = useState(0)

  // Handlers
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
      <Footer />
    </main>
  );
}

function Testimonials({ image, feedback, name, role, onAddNext, onAddPrev }) {
  return <div className="container">
    <div className="img-and-btns">
      <figure>
        <img src={image} alt={name} className="img" />
      </figure>
      {/* buttons */}
      <div className="btns">
        <button className="prev">
          <img src={arrowPrev} alt="prev button" onClick={onAddPrev} />
        </button>
        <button className="next">
          <img src={arrowNext} alt="next button" onClick={onAddNext} />
        </button>
      </div>
    </div>
    {/* text reviews */}
    <section>
      <p>{feedback}</p>
      <article>
        <h5>{name}</h5>
        <span>{role}</span>
      </article>
    </section>
  </div>
}

function Footer() {
  return <p className="footer-text">Challenge by
    <a href="https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL" target="_blank" rel="noreferrer">Frontend Mentor</a>coded by
    <a href="https://www.frontendmentor.io/profile/SatellitePeace" target="_blank" rel="noreferrer">Nneoma</a>
  </p>
}

export default App;
