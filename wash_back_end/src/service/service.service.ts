import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private svsRep: Repository<Service>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.svsRep.find();
  }

  findOne(id: number): Promise<Service | null> {
    return this.svsRep.findOneBy({ id: String(id) });
    //or return this.userRepository.findOne({ where: { id } });
  }

  async create(service: Partial<Service>): Promise<Service> {
    const newService = this.svsRep.create(service);
    return this.svsRep.save(newService);
  }

  async update(id: number, Service: Partial<Service>): Promise<Service> {
    await this.svsRep.update(id, Service);
    return this.svsRep.findOneBy({ id: String(id) });
  }

  async delete(id: number): Promise<void> {
    await this.svsRep.delete(id);
  }
}
