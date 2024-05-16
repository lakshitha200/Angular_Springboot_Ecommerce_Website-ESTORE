
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { Observable } from "rxjs";
import { Customer } from "../Model/Customer";

@Injectable({
    providedIn: "root"
})
export class AuthService{

    url = "http://localhost:8080/api/v1/";


    constructor(private httpClient:HttpClient){}

    //save product
    login(username:string,password:string){
        return this.httpClient.post<any>(this.url+"login",{username,password})
    }
   
    //get active admin
    decodeJwt(){
        var token = localStorage.getItem("JWT");
        if(token == null){
            return undefined
        }else{
          var decodeToken = jwtDecode(token);
          //console.log(decodeToken.sub)
          return decodeToken.sub;
        }
    }
    //get Active Admin by username
    getCustomerByUsername(username:string | undefined):Observable<Customer>{
        return this.httpClient.get<Customer>(`${this.url}${"activeCustomer/"}${username}`,{headers:this.createAuthorizationHeaders()});
    }

    // getCustomerByUsername(token:string | undefined){
    //     this.adminService.getAdminByUsername(token).subscribe(data=>{
    //       this.ActiveAdmin = data;
    //     //   var img = this.ActiveAdmin.img
    //     //   this.imgUrl = "../../assets/img/Profile/"+img;
    //       // console.log(imgUrl)
    // })

    signUp(customer:Customer):Observable<Customer>{
        return this.httpClient.post<Customer>(`${this.url}${"sign-up"}`,customer,{headers:this.createAuthorizationHeaders()});
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