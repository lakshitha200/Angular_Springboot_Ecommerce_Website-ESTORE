import { Customer } from "./Customer";
import { Product } from "./Product";

export class Wishlist{

    id: number;
    customer: Customer;
    productId:number;
    createAt:string;

    constructor(id:number,customer:Customer,productId:number,createAt:string){
        this.id = id;
        this.customer = customer;
        this.productId = productId;
        this.createAt = createAt;
    }
}
