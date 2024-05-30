import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: number): Promise<Client | null> {
    return this.clientRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }

  async create(createClientDto: CreateClientDto){
  }
  
  async update(id: number, updateClientDto: UpdateClientDto){
  }
}
