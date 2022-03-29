import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor (@InjectModel('Product') 
  private readonly productModel : Model<Product>) {

  }

  async insertProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title : title, 
      desc: desc , 
      price: price
    });
    const result = await newProduct.save();
    // console.log(result);
    return result.id;

  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id : prod.id, 
      title : prod.title, 
      desc : prod.desc, 
      price: prod.price
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.productModel.findById(productId);
    return { 
      id : product.id, 
      title :product.title, 
      desc : product.desc, 
      price: product.price};
  }

  async updateProduct(productId: string, title: string, desc: string, price: number) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(productId);
    if (title) {
        updatedProduct.title = title;
    }
    if (desc) {
        updatedProduct.desc = desc;
    }
    if (price) {
        updatedProduct.price = price;
    }
    updatedProduct.save();

  }
  async deleteProduct (prodId : string) {
     await this.productModel.findByIdAndDelete(prodId);
  }
}
