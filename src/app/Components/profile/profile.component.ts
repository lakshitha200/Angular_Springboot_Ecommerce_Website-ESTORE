import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';
import { Customer } from '../../Model/Customer';
import { CustomerService } from '../../Services/Customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @ViewChild('details') details!: ElementRef;
  @ViewChild('detailsUpdate') detailsUpdate!: ElementRef;

  constructor(private activeRouter:ActivatedRoute,
          private authService:AuthService,
          private customerService:CustomerService,
          private router:Router){}


  username!: string;
  customer: Customer = new Customer();
  id!:number;
  
  ngOnInit(): void {
    this.username = this.activeRouter.snapshot.params['username'];
    console.log(this.username)
    this.authService.getCustomerByUsername(this.username).subscribe(data =>{
      //console.log(data)
      this.customer = data;
      this.id = this.customer.cid;
      console.log(this.customer)
    })

    
  }



  edit(){
    this.detailsUpdate.nativeElement.style.display = "flex";
    this.details.nativeElement.style.display = "none";
  }
  close(){
    this.detailsUpdate.nativeElement.style.display = "none";
    this.details.nativeElement.style.display = "block";
  }

  onSubmit(){
    // console.log(this.customer)

    this.customerService.updateCustomer(this.id,this.customer).subscribe(data => {
      console.log(data)
      alert("Updated")
      window.location.reload();
    })
  }
}
