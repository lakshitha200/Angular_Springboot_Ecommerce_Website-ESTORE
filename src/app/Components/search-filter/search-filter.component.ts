import { Component, OnInit } from '@angular/core';
import { ProductSampleAPiService } from '../../Services/ProductSampleAPi.service';
import { ProductFilterService } from '../../Services/ProductFilter.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent implements OnInit{

  constructor(private productApiService:ProductSampleAPiService,private productFilterService:ProductFilterService){}
  
  categorie!:string | null;
  productList:any[] = [];
  product:any;
  
  phone: string = "phone";
  laptop: string = "laptop";
  tablet: string = "tablet";
  tv: string = "tv";
  watch: string = "watch";

  ngOnInit(): void {
 
  }

  filterProducts(categorie:any){
    localStorage.setItem("Product",categorie);
    window.location.reload()
  }


}
