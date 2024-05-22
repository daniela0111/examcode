import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from './bill.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
  ) {}

  findAll(): Promise<Bill[]> {
    return this.billRepository.find();
  }

  findOne(id: number): Promise<Bill | null> {
    return this.billRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.billRepository.delete(id);
  }
}
