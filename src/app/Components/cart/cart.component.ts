import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/Cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';
import { filter } from 'rxjs';
import { Cart } from '../../Model/Cart';
import { ProductSampleAPiService } from '../../Services/ProductSampleAPi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  constructor(private cartService:CartService, private productApiService:ProductSampleAPiService,
              private authService:AuthService,private activeRouter:ActivatedRoute
            ){}

  activeCusId!:number;
  username!:string;
  cartList:Cart[] =[];
  productList:any[] = [];

  ngOnInit(): void {

    //get Active Customer
    this.getActiveCustomer();
    this.productList = this.productApiService.productList;
       
  }

     //getActiveCustomer
     getActiveCustomer(){
      var sub = this.authService.decodeJwt();
      this.authService.getCustomerByUsername(sub).subscribe(data =>{
        this.activeCusId = data.cid;
        //get Cart List
        this.getCartList();  
      })
    }

     //get Cart List
     getCartList(){
      this.cartService.getAllCarts().subscribe(data =>{
        this.cartList = data.filter(select=> select.customer.cid == this.activeCusId);
      })
    }


    //deleteCart
    deleteCart(id:number){
      var deleted = this.cartService.deleteCart(id).subscribe();
      if(deleted){
        window.alert("Remove")
        window.location.reload();
      }
    }

    
      

  

  
}
