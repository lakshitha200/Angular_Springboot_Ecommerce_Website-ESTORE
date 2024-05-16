import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../Model/Customer";


@Injectable({
    providedIn: "root"
})
export class CustomerService{

    baseUrl:string = "http://localhost:8080/api/v1/customers";
    constructor(private httpClient:HttpClient){}

    //get all Customers
    getAllCustomers():Observable<Customer[]>{
        return this.httpClient.get<Customer[]>(this.baseUrl,{headers:this.createAuthorizationHeaders()})
    }

    //get customer by id
    getCustomerById(id:number):Observable<Customer>{
        return this.httpClient.get<Customer>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

    //update Customer
    updateCustomer(id:number,customer:Customer):Observable<Customer>{
        return this.httpClient.put<Customer>(`${this.baseUrl}/${id}`,customer,{headers:this.createAuthorizationHeaders()});
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