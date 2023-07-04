import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
export class ProductDto {
  @Expose()
  name: string;
  @Expose()
  @IsNotEmpty()
  price: number;
  @Expose()
  origin_price: number;
  @Expose()
  description: string;
  @Expose()
  img: string;
  @Expose()
  quantity: number;
  @Expose()
  category_id: number;
}
