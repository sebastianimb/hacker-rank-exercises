import { useState } from "react";
import { SLIDES_DATA } from "../utils/slides";

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleRestart() {
    setCurrentSlide(0);
  }
  function handleNext() {
    if (currentSlide >= SLIDES_DATA.length - 1) return;
    setCurrentSlide(currentSlide + 1);
  }
  function handlePrev() {
    if (currentSlide <= 0) return;
    setCurrentSlide(currentSlide - 1);
  }

  return (
    <div>
      <div
        id="navigation"
        className="text-center p-8 flex gap-16 justify-center"
      >
        <button
          data-testid="button-restart"
          className="p-4 px-16 cursor-pointer border border-neutral-800 hover:bg-neutral-700 rounded-md"
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="p-4 px-16 bg-green-500 rounded-md disabled:bg-gray-500 cursor-pointer"
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="p-4 px-16 bg-green-500 rounded-md disabled:bg-gray-500 cursor-pointer"
          onClick={handleNext}
          disabled={currentSlide === SLIDES_DATA.length - 1}
        >
          Next
        </button>
      </div>
      <div
        id="slide"
        className="my-0 mx-auto border border-neutral-800 w-1/2 min-h-64 flex flex-col justify-center rounded-md items-center text-center"
      >
        <h1 data-testid="title">{SLIDES_DATA[currentSlide].title}</h1>
        <p data-testid="text">{SLIDES_DATA[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default SlideShow;
