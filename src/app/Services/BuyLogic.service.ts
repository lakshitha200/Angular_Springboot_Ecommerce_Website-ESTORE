import { ElementRef, Injectable, ViewChild } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class BuyLogicService{

    @ViewChild('spinnerbox') spinnerbox!:ElementRef;
    @ViewChild('spinner') spinner!:ElementRef;
    @ViewChild('d2') d2!:ElementRef;
    @ViewChild('d3') d3!:ElementRef;
    @ViewChild('cardDetails') cardDetails!:ElementRef;
    @ViewChild('success') success!:ElementRef;


    getMessage(){
        return "Hellow"
        
    }

    setProperties01(){
        this.spinnerbox.nativeElement.style.display = "flex";
        this.d2.nativeElement.style.display = "none";
        this.d3.nativeElement.style.display = "none";
        this.cardDetails.nativeElement.style.display = "none";
        this.spinner.nativeElement.style.display = "block";
    }


}