import { Injectable, OnInit } from "@angular/core";
import { WishlistService } from "./Wishlist.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./Auth.service";
import { Wishlist } from "../Model/Wishlist";

@Injectable({
    providedIn: "root"
})
export class WishlistLogicService{

    constructor(private wishlistService:WishlistService, private router:Router,
        private authService:AuthService,private activeRouter:ActivatedRoute){}


    wishlistList:Wishlist[] = []


   

    setWishlistList(activeCusId:number){
        this.wishlistService.getAllWishlist().subscribe(data =>{
          data.find((selectWishlist)=>{
            if(selectWishlist.customer.cid == activeCusId){
              this.wishlistList.push(selectWishlist);
              console.log(this.wishlistList)
            }
          })
        })
      }

    getWishlistList(){
        return this.wishlistList;
    }

    getMessage(){
        return "lol";
    }
       
    
}