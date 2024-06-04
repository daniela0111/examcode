import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
//import { CreateClientDto } from './dto/create-client.dto';
//import { UpdateClientDto } from './dto/update-client.dto';

//export type Client = any;

@Injectable()
export class ClientService {
  name: string;
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOneById(id: string): Promise<Client | null> {
    return this.clientRepository.findOneBy({ id });
  }
  async findOneByEmail(email: string): Promise<Client | null> {
    return await this.clientRepository.findOneBy({ email });
  }

  async remove(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }

  async create(
    name: string,
    email: string,
    password: string,
    licensePlate: string,
  ) {
    console.log('create client>', name, password);
    return this.clientRepository.save({ name, email, password, licensePlate }); //password can't be save as clear text
  }

  async update(id: string, updateClientDto: any) {
    return 'TBD';
  }
}
