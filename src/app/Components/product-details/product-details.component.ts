import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Model/Product';
import { OrderService } from '../../Services/Order.service';
import { Order } from '../../Model/Order';
import { AuthService } from '../../Services/Auth.service';
import { Customer } from '../../Model/Customer';
import { BuyLogicService } from '../../Services/BuyLogic.service';
import { ProductSampleAPiService } from '../../Services/ProductSampleAPi.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from '../../Services/Carousel.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit,AfterViewInit{
  @ViewChild('spinnerbox') spinnerbox!:ElementRef;
  @ViewChild('spinner') spinner!:ElementRef;
  @ViewChild('d2') d2!:ElementRef;
  @ViewChild('d3') d3!:ElementRef;
  @ViewChild('cardDetails') cardDetails!:ElementRef;
  @ViewChild('success') success!:ElementRef;
  @ViewChild('colours') colours!:ElementRef;
  
  constructor(private activeRouter:ActivatedRoute,private productApiService:ProductSampleAPiService,
              private orderService:OrderService,private authService:AuthService,
              private carouselService:CarouselService,
              private renderer:Renderer2, private el: ElementRef 
  ){}
  
  id!: number;
  product!: any;
  orderNumber!:number;
  order!:Order;
  activeCustomer!:Customer;
  images:string[] = [];
  customOptions1:any;
  relatedProducts:any[] = [];
 
  ngOnInit(): void {
   


    this.id = this.activeRouter.snapshot.params['id'];
    // getproducts by id
    this.getProductByID(this.id);

    //  getActiveCustomer
    this.getActiveCustomer()

    // get Carousel 01
    this.customOptions1 = this.carouselService.customOptions1;

    //get orderList and make order number
    this.orderService.getAllOrderst().subscribe(data =>{
      this.orderNumber = data[data.length-1].orderNumber+1;
    })
   
  

  }

  // For carosel 01 
  ngAfterViewInit(): void {
    const owlDots = this.el.nativeElement.querySelectorAll('.owl-dots .owl-dot');
    console.log(owlDots)

    if(owlDots){
      this.renderer.setStyle(owlDots[0],'backgroundImage',`url(${this.images[0]})`)
      this.renderer.setStyle(owlDots[1],'backgroundImage',`url(${this.images[1]})`)
      this.renderer.setStyle(owlDots[2],'backgroundImage',`url(${this.images[2]})`)
      this.renderer.setStyle(owlDots[3],'backgroundImage',`url(${this.images[3]})`)
    }
  }


  // getproducts by id
  getProductByID(id:number){
    this.productApiService.productList.filter((data: any)=>{
      if(data.id == id){
        this.product = data;
        this.images = data.images
      }
    })
    console.log(this.images[0])
  }

  //getActiveCustomer
  getActiveCustomer(){
    var sub = this.authService.decodeJwt();
    this.authService.getCustomerByUsername(sub).subscribe(data =>{
      this.activeCustomer = data;
    })
  }

  createOrder(){
    console.log(this.product.price)
    var orderPrice = this.product.price-(this.product.price * this.product.discount/100);
    var date = new Date();
    var dateAndTime =`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}|${date.getHours()}.${date.getMinutes()}`;

    this.order = new Order(this.orderNumber,dateAndTime,4,orderPrice,"success",this.product.id,this.activeCustomer)
    console.log(this.order)

    setTimeout(()=>{
      this.spinnerbox.nativeElement.style.display = "flex";
      this.d2.nativeElement.style.display = "none";
      this.d3.nativeElement.style.display = "none";
      this.cardDetails.nativeElement.style.display = "none";
      this.colours.nativeElement.style.display = "none"
      this.spinner.nativeElement.style.display = "block";
      setTimeout(()=>{
        this.spinner.nativeElement.style.display = "none";
        this.success.nativeElement.style.display = "flex";
        this.finishOrder(this.order);
        setTimeout(()=>{
          window.location.reload()

        },3000)
      },5000)
    },300)

  }

  finishOrder(order:any){
    this.orderService.addToOrders(order).subscribe(data=>{
      console.log(data)
    })
    
  }









  // sample codes--------
  chooseCard(card:any){
    card.style.border = '2px solid rgb(98, 0, 255)';
  }

  chooseColour(colour:any){
    colour.style.border = '2px solid rgb(98, 0, 255)';
  }
}
