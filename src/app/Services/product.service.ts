import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../Model/Product";

@Injectable({
    providedIn: "root"
})
export class ProductService{

    constructor(private httpClient:HttpClient){}

    baseUrl:string = "http://localhost:8080/api/v1/products";

    //get all products
    getAllProducts():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.baseUrl)
    }

    //get product by id
    getProductById(id:number):Observable<Product>{
        return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
    }

}