import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Model/Customer';
import { CustomerService } from '../../Services/Customer.service';
import { AuthService } from '../../Services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  constructor(private customerService:CustomerService,private authService:AuthService,private router:Router){}
  
  customer:Customer = new Customer();
  cusNumber!:number;

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(data =>{
      this.cusNumber = data[data.length-1].cusNumber + 1;
      this.customer.cusNumber = this.cusNumber;
    })
  }

  onSubmit(){
    // console.log(this.customer)
    this.authService.signUp(this.customer).subscribe(data =>{
      //console.log(data)
      localStorage.setItem("Sign-up","Sign Up Successful!")
      this.router.navigateByUrl("home/sign-in");
    })
  }
}
