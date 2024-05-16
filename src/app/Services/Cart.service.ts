import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "../Model/Cart";


@Injectable({
    providedIn: "root"
})
export class CartService{

    constructor(private httpClient:HttpClient){}

    baseUrl:string = "http://localhost:8080/api/v1/cart";

    //get all Carts
    getAllCarts():Observable<Cart[]>{
        return this.httpClient.get<Cart[]>(this.baseUrl,{headers:this.createAuthorizationHeaders()})
    }

    //add to cart
    addToCart(C:any){
        return this.httpClient.post(this.baseUrl,C,{headers:this.createAuthorizationHeaders()});
    }

    //get cart by id
    getCartById(id:number):Observable<Cart>{
        return this.httpClient.get<Cart>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

    //delete
    deleteCart(id:number){
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