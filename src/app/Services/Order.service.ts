import { Injectable } from "@angular/core";
import { Order } from "../Model/Order";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./Auth.service";

@Injectable({
    providedIn:"root"
})
export class OrderService{

    constructor(private httpClient:HttpClient,private authService:AuthService){}
    
    baseUrl:string = "http://localhost:8080/api/v1/orders";

     getAllOrderst():Observable<Order[]>{
        return this.httpClient.get<Order[]>(this.baseUrl,{headers:this.createAuthorizationHeaders()})
    }
     
    addToOrders(order:Order):Observable<Order>{
        return this.httpClient.post<Order>(this.baseUrl,order,{headers:this.createAuthorizationHeaders()});
    }

    getWishlistById(id:number):Observable<Order>{
        return this.httpClient.get<Order>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }


    updateOrder(id:number,order:Order):Observable<Order>{
        return this.httpClient.put<Order>(`${this.baseUrl}/${id}`,order,{headers:this.createAuthorizationHeaders()});
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