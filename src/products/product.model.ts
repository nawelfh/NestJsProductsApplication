/* eslint-disable prettier/prettier */
export class Product {
    id:string;
    title: string;
    desc: string;
    price: number;
    constructor (id:string , title:string , desc:string , price:number) {
        this.id = id;
        this.title = title;
        this.desc = desc; 
        this.price = price;


};
}