import { Customer } from "./Customer";

export class Order{

    oId!: number;
    orderNumber: number;
    orderDate: string;
    quantity:number;
    orderPrice: number;
    orderState!: string;
    productId: number;
    customer: Customer;

    constructor(
        orderNumber: number,
        orderDate: string,
        quantity:number,
        orderPrice: number,
        orderState: string,
        productId: number,
        customer: Customer){

            this.orderNumber = orderNumber;
            this.orderDate = orderDate;
            this.quantity = quantity;
            this.orderPrice =orderPrice;
            this.orderState = orderState;
            this.productId =productId;
            this.customer = customer;


    }

}