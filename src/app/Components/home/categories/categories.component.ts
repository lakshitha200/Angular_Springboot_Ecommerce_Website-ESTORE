import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductFilterService } from '../../../Services/ProductFilter.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

  constructor(private router:Router,private productFilterService:ProductFilterService){}

  phone: string = "phone";
  laptop: string = "laptop";
  tablet: string = "tablet";
  tv: string = "tv";
  watch: string = "watch";

  ngOnInit(): void {
    
  
  }

  filterProducts(categorie:any){

    localStorage.setItem("Product",categorie)
    this.router.navigateByUrl("/search")
      .then(()=>{
        window.location.reload()
      })
  }
}
