import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column() //one to one relative to service
  service: string;

  @Column() //one to many relative to extra
  extra: string;

  @Column()
  clientID: number;

  @Column()
  location: string;

  @Column()
  total_price: number;
}
