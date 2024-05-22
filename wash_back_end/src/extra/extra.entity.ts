import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Extra {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
