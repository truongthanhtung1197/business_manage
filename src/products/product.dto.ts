import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { baseDto } from 'src/common/base.dto';
export class ProduceDto extends baseDto {
  @Expose()
  name: string;
  @Expose()
  @IsNotEmpty()
  price?: number;
  @Expose()
  origin_price?: number;
  @MinLength(5, {
    message: 'min leng ssd',
  })
  @Expose()
  description: string;
  @Expose()
  img?: number[];
  @Expose()
  quantity: number;
  @Expose()
  category_id: number;
}
