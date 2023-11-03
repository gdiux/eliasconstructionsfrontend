import { Component } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { EffectCards, Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  /**======================================================================
   * SWIPER
  ===================================================================== */
  public configIntro = {
    "slidesPerView": 1,
    "centeredSlides": true,
    "loop": true,
    "speed": 650,
    "coverflowEffect": {
        "rotate": 0,
        "stretch": 0,
        "depth": 560,
        "modifier": 1,
        "slideShadows": true
    },
    "autoplay": {
        "delay": 6000,
        "disableOnInteraction": false
    },
    "navigation": {
        "prevEl": ".btn-prev",
        "nextEl": ".btn-next"
    }
  };
  public config = {
      "loop": true,
      "grabCursor": false,
      "centeredSlides": true,
      "autoplay": {
      "delay": 0,
      "disableOnInteraction": false
      },
      "freeMode": true,
      "speed": 38000,
      "freeModeMomentum": false,
      "breakpoints": {
      "0": {
          "slidesPerView": 2,
          "spaceBetween": 8
      },
      "500": {
          "spaceBetween": 16
      },
      "768": {
          "slidesPerView": 3,
          "spaceBetween": 24
      }
      }
  };

}
