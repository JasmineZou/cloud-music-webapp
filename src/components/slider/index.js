import React, {useEffect, useState} from 'react';
import Swiper from "swiper";
import { SliderContainer } from './style';
import "swiper/dist/css/swiper.css";

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  useEffect(() => {
    if(bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        pagination: {el:'.swiper-pagination'},
      })
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper])
  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.targetId}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="music" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="before"></div>
    </SliderContainer>
  )
}
export default React.memo(Slider);
