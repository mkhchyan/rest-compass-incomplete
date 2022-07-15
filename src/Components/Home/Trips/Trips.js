import tods from "./tripImg/tods.png";
import adidas from "./tripImg/adidas.png";
import bmw from "./tripImg/bmw.png";
import zegna from "./tripImg/zegna.png";
import "./trips.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Trips = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="trips">
        <div>
          <p>Աշխատում են TRIP համակարգով</p>
        </div>
        <Slider {...settings} className="trip-list">
          <div className="slide">
            <img src={tods} />
            {/* <div className='trip-img'>
                        TRIP
                    </div> */}
          </div>
          <div className="slide">
            <img src={adidas} />
            {/* <div className='trip-img'>
                        TRIP
                    </div> */}
          </div>
          <div className="slide">
            <img src={bmw} />
            {/* <div className='trip-img'>
                        TRIP
                    </div> */}
          </div>
          <div className="slide zeg">
            <img src={zegna} />
            {/* <div className='trip-img'>
                        TRIP
                    </div> */}
          </div>
          <div className="slide">
            <img src={tods} />
            {/* <div className='trip-img'>
                        TRIP
                    </div> */}
          </div>
          <div className="slide">
            <img src={adidas} />
            {/* <div className='trip-img'>
                        TRIP
                    </div> */}
          </div>
          <div className="slide">
            <img src={bmw} />
            {/* <div className='trip-img'>
                        TRIP
                    </div> */}
          </div>
        </Slider>
      </div>
    </>
  );
};
