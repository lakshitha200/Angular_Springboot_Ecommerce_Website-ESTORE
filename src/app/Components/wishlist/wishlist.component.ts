import { Component, OnInit, } from '@angular/core';
import { Wishlist } from '../../Model/Wishlist';
import { WishlistService } from '../../Services/Wishlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';
import { ProductSampleAPiService } from '../../Services/ProductSampleAPi.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  constructor(private wishlistService:WishlistService,private productApiService:ProductSampleAPiService,
              private authService:AuthService,private activeRouter:ActivatedRoute){}

  activeCusId!:number;
  wishlistList:Wishlist[] = []
  productList:any[] = [];

  ngOnInit(){

      //get Active Customer
      this.getActiveCustomer();
      this.productList = this.productApiService.productList;

  }
    //getActiveCustomer
    getActiveCustomer(){
      var sub = this.authService.decodeJwt();
      this.authService.getCustomerByUsername(sub).subscribe(data =>{
        this.activeCusId = data.cid;
        //get Wishlist List
        this.getWishlistList();  
      })
    }

    //get Wishlist List
    getWishlistList(){
      this.wishlistService.getAllWishlist().subscribe(data =>{
        this.wishlistList = data.filter(select=> select.customer.cid == this.activeCusId);
        
      })
 
    }
  
    // deleteWishlist
    deleteWishlist(id:number){
      var deleted = this.wishlistService.deleteWishlist(id).subscribe();
      if(deleted){
        window.alert("Remove")
        window.location.reload();
      }
    }

}
