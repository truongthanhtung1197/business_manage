import { Expose } from 'class-transformer';

export class baseDto {
  @Expose()
  created_at: Date;
  @Expose()
  updated_at: Date;
}
