import { Injectable } from "@nestjs/common";
import { Product } from "src/models/product.model";
import { ProductDto } from "./product.dto";

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      name: "sds",
      category_id: 0,
      description: "description produce",
      price: 100000,
      product_id: 1,
      quantity: 100,
      img: "1212",
      origin_price: 300000,
    },
    {
      name: "sds2",
      category_id: 0,
      description: "description produce 2",
      price: 150000,
      product_id: 2,
      quantity: 50,
      img: "4444",
      origin_price: 350000,
    },
  ];

  createProduct(product: ProductDto): Product {
    const _product: Product = {
      product_id: Math.random(),
      ...product,
    };
    this.products.push(_product);
    return _product;
  }

  getAllProduct(): Product[] {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products?.find((v: Product) => v.product_id === id);
    if (product) return product;
  }

  updateProduct(id: number, product: ProductDto): any {
    const productUpdateIndex = this.products?.findIndex(
      (v: Product) => v?.product_id === Number(id)
    );
    if (productUpdateIndex !== -1) {
      this.products[productUpdateIndex] = {
        ...this.products?.[productUpdateIndex],
        ...product,
      };
      return this.products[productUpdateIndex];
    }
  }

  deleteProduct(id: number): boolean {
    const productDeleteIndex = this.products?.findIndex(
      (v: Product) => v?.product_id === Number(id)
    );
    if (productDeleteIndex !== -1) {
      this.products.splice(productDeleteIndex, 1);
      return true;
    }
    return false;
  }
}
