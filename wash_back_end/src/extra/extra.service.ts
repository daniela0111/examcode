import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Extra } from './extra.entity';

@Injectable()
export class ExtraService {
  constructor(
    @InjectRepository(Extra)
    private extraRepository: Repository<Extra>,
  ) {}

  findAll(): Promise<Extra[]> {
    return this.extraRepository.find();
  }

  findOne(id: number): Promise<Extra | null> {
    return this.extraRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.extraRepository.delete(id);
  }
}
