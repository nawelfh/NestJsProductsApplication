import { ProductModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ProductModule, 
      ConfigModule.forRoot({ envFilePath: ['.env'] }),
      MongooseModule.forRoot(process.env.MONGO_INFO),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
