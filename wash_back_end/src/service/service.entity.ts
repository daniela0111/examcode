import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 8, scale: 2, default: '0.00' })
  price: number;

  @Column('boolean', { default: 'false' })
  isSaled: boolean;
}
