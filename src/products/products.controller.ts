/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Param, Patch , Delete } from '@nestjs/common';
import { ProductService } from './products.service';
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }
  @Get()
  async getAllProducts() {
    const products = await this.productService.getProducts().then();
    return products;
  }

  @Get(':id')
  async getProduct(@Param('id') prodId: string) {
    const product =  await this.productService.getSingleProduct(prodId).then();
    return product;
  
  }
  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
       await this.productService.updateProduct (prodId , prodTitle , prodDesc , prodPrice);
      return ("product updated successfully !! ")
  }

  @Delete(':id')
  async removeProduct (
    @Param('id') prodId: string
  ){
    await this.productService.deleteProduct(prodId);
    return ("product deleted successfully !! ");
  }
}
