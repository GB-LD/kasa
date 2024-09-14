import { useState } from 'react';

const ImagesSlider = (props) => {
const images = props.imgUrls;
const [sliderIndex, setSliderIndex] = useState(0);

function handleNextImgClick() {
    if (sliderIndex < images.length - 1) {
        setSliderIndex((index) => index + 1);
    } else {
        setSliderIndex(0);
    }
}

function handlePrevClick() {
    if (sliderIndex > 0) {
        setSliderIndex((index) => index - 1);
    } else {
        setSliderIndex(images.length - 1);
    }
}

  return (
    <div className='slider-wrapper'>
        <img src={images[sliderIndex]} alt="" />
        {images.length > 1 && (
        <>
            <button onClick={handlePrevClick}>
            <img src="/src/assets/icons/chevron-left.svg" alt="Previous" />
            </button>
            <button onClick={handleNextImgClick}>
            <img src="/src/assets/icons/chevron-right.svg" alt="Next" />
            </button>
        </>
        )}
        <div className="image-counter">
            {sliderIndex + 1}/{images.length}
        </div>
    </div>
  )
}

export default ImagesSlider