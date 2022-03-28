/* eslint-disable prettier/prettier */
import { Injectable , NotFoundException} from '@nestjs/common';
import { Product } from './product.model';

@Injectable()

export class ProductService {
    private products : Product [] = [];

    insertProduct(title:string , desc:string , price:number){
        const prodId = ((Math.random())*100).toString();
        const newProduct = new Product (prodId, title , desc , price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts () {
        return [...this.products];
       }

    getSingleProduct (productId: string){
        const product = this.products.find((prod) => prod.id === productId);
        if (!product){
            throw new NotFoundException ('Could not find this product')
        }
        return { ...product } ;   
    }
}