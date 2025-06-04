import React from "react";
import TypingEffect from "../components/typingEffect";
import CarouselWithDots from "../components/Carousel";

function Home() {
  const sentences = ["Site under construction"];

  return (
    <div id="home">
      <TypingEffect sentences={sentences} />
      <CarouselWithDots />
    </div>
  );
}

export default Home;
