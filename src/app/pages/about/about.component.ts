import { Component } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { EffectCards, Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public config = {
    "slidesPerView": 1,
    "pagination": {
        "el": ".swiper-pagination",
        "clickable": true
    },
    "breakpoints": {
        "500": {
        "slidesPerView": 2
        },
        "991": {
        "slidesPerView": 3
        }
    }
  };

  public configSocial = {
    "slidesPerView": 2,
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    }
  };

}
