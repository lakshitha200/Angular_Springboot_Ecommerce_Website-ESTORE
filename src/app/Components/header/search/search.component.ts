import { Component, OnInit } from '@angular/core';
import { ProductSampleAPiService } from '../../../Services/ProductSampleAPi.service';
import { ProductFilterService } from '../../../Services/ProductFilter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent{

 
  searchTearm:any = '';



  onSubmit(){
    console.log(this.searchTearm)
  }
  
}

