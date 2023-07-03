import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ProduceDto } from './product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      category_id: 0,
      description: 'description produce',
      price: 100000,
      product_id: 1,
      quantity: 100,
      img: '1212',
      origin_price: 300000,
    },
    {
      category_id: 0,
      description: 'description produce 2',
      price: 150000,
      product_id: 2,
      quantity: 50,
      img: '4444',
      origin_price: 350000,
    },
  ];

  createProduce(produce: ProduceDto): any {
    const data = plainToClass(ProduceDto, produce, {
      excludeExtraneousValues: true,
    });
    return data;
  }

  getAllProduct(): Product[] {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products?.find((v: Product) => v.product_id === id);
    if (product) return product;
  }

  updateProduct() {
    return `update product for id: `;
  }

  deleteProduct() {
    return 'delete product';
  }
}
