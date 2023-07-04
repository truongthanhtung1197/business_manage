import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  origin_price: number;

  @Column()
  description: string;

  @Column()
  img: string;

  @Column()
  quantity: string;

  @ManyToOne(() => CategoryEntity, (category) => category.category_id)
  category_id: string;
}
