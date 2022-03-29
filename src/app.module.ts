import { ProductModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ProductModule, 
    MongooseModule.forRoot(
      'mongodb+srv://nawel:afTMRYnpzTCN1hXA@cluster0.p21r4.mongodb.net/nestjs-productApp?retryWrites=true&w=majority'
      ),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
