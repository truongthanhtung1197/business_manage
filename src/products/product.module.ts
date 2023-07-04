import { Module } from "@nestjs/common";
import { ProduceController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
  controllers: [ProduceController],
  providers: [ProductService],
})
export class ProductModule {}
