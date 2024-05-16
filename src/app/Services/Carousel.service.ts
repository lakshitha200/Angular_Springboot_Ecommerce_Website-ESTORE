import { Injectable } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Injectable({
    providedIn:"root"
})
export class CarouselService{

    customOptions1: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        autoplay:true,
        navSpeed: 200,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          940: {
            items: 1
          }
        },
        nav: true
      }

}