import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Wishlist } from "../Model/Wishlist";
import { Observable } from "rxjs";
import { AuthService } from "./Auth.service";

@Injectable({
    providedIn: "root"
})
export class WishlistService{

    constructor(private httpClient:HttpClient,private authService:AuthService){}

    baseUrl:string = "http://localhost:8080/api/v1/wishlist";
  
    
    //get all Wishlist
    getAllWishlist():Observable<Wishlist[]>{
        return this.httpClient.get<Wishlist[]>(this.baseUrl,{headers:this.createAuthorizationHeaders()})
    }
     

    //add to Wishlist
    addToWishlist(wishlist:Wishlist):Observable<Wishlist>{
        return this.httpClient.post<Wishlist>(this.baseUrl,wishlist,{headers:this.createAuthorizationHeaders()});
    }

    // //get Wishlist by id
    getWishlistById(id:number):Observable<Wishlist>{
        return this.httpClient.get<Wishlist>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

    //delete
    deleteWishlist(id:number){
        return this.httpClient.delete(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

    //CreateAuthorizationHeaders
    private createAuthorizationHeaders(){
        const jwtToken = localStorage.getItem("JWT");
        if(jwtToken){
            return new HttpHeaders().set(
                'Authorization','Bearer '+jwtToken
            )
        }else{
            console.log("Jwt Token Not Found");
            return new HttpHeaders();
        }
    }
}