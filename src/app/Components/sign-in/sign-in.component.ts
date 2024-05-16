import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../Services/Auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../Services/Toast.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
  @ViewChild('toast') toast!: ElementRef;

  constructor(private authService:AuthService,private router:Router,private toastService:ToastService){}
  
  message!: any;
  messageColour:string | undefined;

  ngOnInit(): void {
    this.getTosat();
  }



  login(username:string,password:string){
    //console.log(username+"  "+password)
    this.authService.login(username,password).subscribe(response =>{
      console.log(response.accessToken);
      if(response.accessToken){
        const jwtToken = response.accessToken;
        localStorage.setItem("JWT",jwtToken)
        localStorage.setItem("Sign-in","Sign In Successful!")
        this.router.navigateByUrl("/home").then(()=>{
          window.location.reload();
        });
        
      }
    },error =>{
      alert("Username or Password is incorrect");
    })
        
  }


  getTosat(){
    this.message = this.toastService.getToastMessage();
    console.log(this.message)
    if(localStorage.getItem("Sign-up")!=null){
      setTimeout(()=>{
           this.toast.nativeElement.style.display = "block";
           setTimeout(()=>{
             this.toast.nativeElement.style.display = "none";
             localStorage.removeItem("Sign-up"); 
           },5000)
         },100)
    }
    
    
  }
  close(){
    localStorage.removeItem("Sign-up");
    this.toast.nativeElement.style.display = "none";
  }
 
}

