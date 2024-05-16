import { ElementRef, Injectable, ViewChild } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ToastService{

    @ViewChild('toast') toast!: ElementRef;

    message!:any;
    messageColour!:string;

    getToastMessage(){

        if(localStorage.getItem("Sign-in")!=null){
            this.message= localStorage.getItem("Sign-in");
            return this.message
        }else if(localStorage.getItem("Sign-out")!=null){
            this.message= localStorage.getItem("Sign-out");
            this.messageColour = "#17a2b8";
            return this.message;
        }else if(localStorage.getItem("Sign-up")!=null){
            this.message= localStorage.getItem("Sign-up");
            return this.message;
        }
    }   
    
  
}