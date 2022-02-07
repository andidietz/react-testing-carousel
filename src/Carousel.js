import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const {caption, src} = props.cardData[cardIdx];
  const total = props.cardData.length;

  const goForward = () => setCardIdx(cardIdx + 1);
  const goBackward = () => setCardIdx(cardIdx - 1);

  const backwardHidden = cardIdx === 0 ? 'hidden' : '';
  const forwardHidden = cardIdx === total - 1 ? 'hidden' : '';

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <button 
          className={backwardHidden} 
          onClick={goBackward}
          data-testid="backward">
          Back
        </button>
        <Card
          caption={caption}
          src={src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <button 
          className={forwardHidden} 
          onClick={goForward}
          data-testid="forward">
          Next
        </button>
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;

