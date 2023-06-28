import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { baseDto } from 'src/common/base.dto';
export class ProduceDto extends baseDto {
  @Expose()
  name: string;
  @Expose()
  @IsNotEmpty()
  price?: number;
  @Expose()
  origin_price?: number;
  @Expose()
  description: string;
  @Expose()
  img?: number[];
  @Expose()
  quantity: number;
  @Expose()
  category_id: number;
}
