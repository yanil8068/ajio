import { settings } from "../../Utils/Electronics/sliderSetting";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


function Carousel({ images }) {
  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} >
            {image.url?<Link to={image.url}><img className="w-full h-[90%] lg:h-[450px]" src={image.src} alt={image.alt} /></Link>
            :
            <img className="w-full" src={image.src} alt={image.alt} />
            }
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
