import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../Services/Auth.service';
import { Customer } from '../../Model/Customer';
import { Router } from '@angular/router';
import { WishlistService } from '../../Services/Wishlist.service';
import { Wishlist } from '../../Model/Wishlist';
import { CartService } from '../../Services/Cart.service';
import { Cart } from '../../Model/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private authService:AuthService,private router:Router,
              private cartService:CartService,private wishlistService:WishlistService 
            ){}
  
  activeCustomer!: Customer;
  wishlistList: Wishlist[] = [];
  cartList: Cart[] = [];

  ngOnInit(): void {

    //get Active Customer
    this.getActiveCustomer();




  }

  //getActiveCustomer
  getActiveCustomer(){
    var sub = this.authService.decodeJwt();
    this.authService.getCustomerByUsername(sub).subscribe(data =>{
      this.activeCustomer = data;
      //get Wishlist List and cart list
      this.getWishlistList();  
      this.getCartList();
    })
  }

  //get Wishlist List
  getWishlistList(){
    this.wishlistService.getAllWishlist().subscribe(data =>{
      this.wishlistList = data.filter(select=> select.customer.cid == this.activeCustomer.cid);
    })
  }

  //get Cart List
  getCartList(){
    this.cartService.getAllCarts().subscribe(data =>{
      this.cartList = data.filter(select=> select.customer.cid == this.activeCustomer.cid);
    })
  }


  logout(){

    const userConfirmd = window.confirm("Do you want to sign-out?");
    if(userConfirmd){
      localStorage.removeItem("JWT");
      localStorage.setItem("Sign-out","Sign Out Successful!")
      this.router.navigateByUrl("/home").then(()=>{
        window.location.reload();
      })
    }else{
      //console.log("Not sign-out");
    }
  }

 
  
}

