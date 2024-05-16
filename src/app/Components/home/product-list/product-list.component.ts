import { Component, OnInit } from '@angular/core';
import { ProductSampleAPiService } from '../../../Services/ProductSampleAPi.service';
import { AuthService } from '../../../Services/Auth.service';
import { CartService } from '../../../Services/Cart.service';
import { WishlistService } from '../../../Services/Wishlist.service';
import { Customer } from '../../../Model/Customer';
import { Cart } from '../../../Model/Cart';
import { Wishlist } from '../../../Model/Wishlist';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  constructor(private productApiService:ProductSampleAPiService, private authService:AuthService,
              private cartService:CartService,  private wishlistService:WishlistService){}
 

  productList:any[]= [];
  message!: any;
  messageColour:string | undefined;
  activeCustomer!: Customer;
  // selectedProduct!:Product;
  wishlist!: Wishlist;
  cart!:Cart;
  wishlistList:Wishlist[] = []
  cartList:Cart[] = [];
  alreadyInWishlist:number[] = [];
  alreadyInCart:number[] = [];
  categorie!: string | null;

  ngOnInit(): void {
     //getProductList
     this.getProductList();

     //get Active Customer
     this.getActiveCustomer();

     //filter
     this.filterProducts();

  }

  //getProductList
  getProductList(){
    this.productList = this.productApiService.productList;
    console.log(this.productApiService.productList)
  }

  //getActiveCustomer
  getActiveCustomer(){
    var sub = this.authService.decodeJwt();
    this.authService.getCustomerByUsername(sub).subscribe(data =>{
      this.activeCustomer = data;
       //get Wishlist List and cart List
       this.getWishlistList();  
       this.getCartList();
    })
  }

   // ==============================CART START=========================================//
  //Add To cart
  addtoCart(id:number){
    this.productApiService.productList.filter((data: any)=>{
      if(data.id == id){
        this.cart = new Cart(0,this.activeCustomer,data.id,"2025");
        this.saveInCart(this.cart);
      }
    })
  }

  //save In Cart
  saveInCart(cart:any){
    this.cartService.addToCart(cart).subscribe(data =>{
      console.log(data)
      window.alert("Add to Cart")
      window.location.reload()
    })
  }

  //get Cart List
  getCartList(){
    this.cartService.getAllCarts().subscribe(data =>{
      this.cartList = data.filter(select=> select.customer.cid == this.activeCustomer.cid);
      this.cartList.filter(already=>this.alreadyInCart.push(already.productId))
    })
  }
  
  // ==============================CART CLOSE=========================================//
 

  // ==============================WISHLIST START=========================================//

  //Add To Wishlist
  addtoWishlist(id:number){
    this.productApiService.productList.filter((data: any)=>{
      if(data.id == id){
        this.wishlist = new Wishlist(0,this.activeCustomer,data.id,"2025");
        this.saveInWishlist(this.wishlist);
      }
    })
  }

  //save In wishlist
  saveInWishlist(wishlist:any){
    this.wishlistService.addToWishlist(wishlist).subscribe(data =>{
      console.log(data)
      window.alert("Add to WishList")
      window.location.reload()
    })
  }

  //get Wishlist List
  getWishlistList(){
    this.wishlistService.getAllWishlist().subscribe(data =>{
      this.wishlistList = data.filter(select=> select.customer.cid == this.activeCustomer.cid);
      this.wishlistList.filter(already=>this.alreadyInWishlist.push(already.productId))
    })

  }

  // ==============================WISHLIST CLOSE=========================================//


  filterProducts(){
    this.categorie = localStorage.getItem("Product");
    console.log(this.categorie)
    
    setTimeout(()=>{
      localStorage.removeItem("Product");
    },1000)
  }

  close(){
    window.location.reload();
  }
}
