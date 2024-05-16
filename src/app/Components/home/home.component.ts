import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../Model/Product';
import { AuthService } from '../../Services/Auth.service';
import { Customer } from '../../Model/Customer';
import { Cart } from '../../Model/Cart';
import { CartService } from '../../Services/Cart.service';
import { Wishlist } from '../../Model/Wishlist';
import { WishlistService } from '../../Services/Wishlist.service';
import { WishlistLogicService } from '../../Services/WIshlistLogic.service';
import { ToastService } from '../../Services/Toast.service';
import { ProductSampleAPiService } from '../../Services/ProductSampleAPi.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @ViewChild('toast') toast!: ElementRef;

  constructor(private productApiService:ProductSampleAPiService, private authService:AuthService,
              private router:Router, private cartService:CartService,
              private toastService:ToastService,private wishlistService:WishlistService){}

  

  // products:Product[] = [];
  productList:any[]= [];
  message!: any;
  messageColour:string | undefined;
  activeCustomer!: Customer;
  selectedProduct!:Product;
  wishlist!: Wishlist;
  cart!:Cart;
  wishlistList:Wishlist[] = []
  cartList:Cart[] = [];
  alreadyInWishlist:number[] = [];
  alreadyInCart:number[] = [];

  // ==============================NG ON INIT START=========================================//
  ngOnInit(): void {
 


    // get toast messages
    this.getTosat();

  }
  // ==============================NG ON INIT CLOSE=========================================//

 
  getTosat(){
    this.message = this.toastService.getToastMessage();
    console.log(this.message)
    if(localStorage.getItem("Sign-in")!=null){
      setTimeout(()=>{
           this.toast.nativeElement.style.display = "block";
           setTimeout(()=>{
             this.toast.nativeElement.style.display = "none";
             localStorage.removeItem("Sign-in"); 
           },5000)
         },100)
    }else if(localStorage.getItem("Sign-out")!=null){
      this.messageColour = "#17a2b8";
      setTimeout(()=>{
          this.toast.nativeElement.style.display = "block";
          setTimeout(()=>{
            this.toast.nativeElement.style.display = "none";
            localStorage.removeItem("Sign-out"); 
          },5000)
        },100)
    }
    
    
  }
  close(){
    localStorage.removeItem("Sign-in");
    localStorage.removeItem("Sign-out");
    this.toast.nativeElement.style.display = "none";
  }
  
}

