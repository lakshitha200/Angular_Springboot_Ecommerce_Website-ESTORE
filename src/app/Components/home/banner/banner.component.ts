import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',

})
export class BannerComponent implements OnInit{
  
  @ViewChild('slick')
  slick!: ElementRef;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
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


  ngOnInit(): void {

  }



 
}
