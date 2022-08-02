import React, {useState} from 'react';

function Slides({slides}) {
    const [currentSlide, setSlide] = useState(0)
    return (
        <>
             <h1 className='heading mb-5 pb-3 pt-3 bg-dark text-success'> <b> SLIDE SHOW APP</b></h1>
            <div id="navigation" className="text-center">
                <button 
                    data-testid="button-restart"
                    className={currentSlide === 0 ? "small outlined " : "small btn btn-success"}
                    disabled={currentSlide === 0}
                    onClick={() => setSlide(0)}
                  
                    >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className={currentSlide === 0 ? "small outlined " : "small btn btn-success"}
                    disabled={currentSlide === 0}
                    onClick={() => setSlide(currentSlide - 1)}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className={currentSlide === slides.length - 1 ? "small outlined " : "small btn btn-success"}
                    disabled={currentSlide === slides.length - 1}
                    onClick={() => setSlide(currentSlide + 1)}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlide].title}</h1>
                <p data-testid="text">{slides[currentSlide].text}</p>
            </div>
        </>
    );

}

export default Slides;