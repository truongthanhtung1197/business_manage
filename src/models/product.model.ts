export class Product {
  product_id: number;
  price: number;
  origin_price?: number;
  description: string;
  img?: string;
  quantity?: number;
  category_id: number;

  constructor({
    product_id,
    price,
    description,
    origin_price,
    img,
    quantity,
    category_id,
  }) {
    if (product_id) {
      this.product_id = product_id;
    }
    if (price) {
      this.price = price;
    }
    if (description) {
      this.description = description;
    }
    if (origin_price) {
      this.origin_price = origin_price;
    }
    if (img) {
      this.img = img;
    }
    if (quantity) {
      this.quantity = quantity;
    }
    if (category_id) {
      this.category_id = category_id;
    }
  }
}
