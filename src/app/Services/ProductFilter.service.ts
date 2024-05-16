import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ProductFilterService{

    categorie!:string;

    filterProducts(categorie:any){
        this.categorie = categorie
    }
}