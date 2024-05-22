import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ServiceService } from '../service/service.service';
import { Service } from './service.entity';

@Controller('services')
export class ServiceController {
  constructor(private readonly servicesSerivce: ServiceService) {}

  @Get()
  async findAll(): Promise<Service[]> {
    //return { pokus: 'omyl', note: 'jeste chybi napojeni na DB' }; //
    return this.servicesSerivce.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Service> {
    const user = await this.servicesSerivce.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }
  /*
  //create service
  @Post()
  async create(@Body() service: Service): Promise<Service> {
    return this.usersService.create(service);
  }

  //update user => uz jen udelat dle "Service"
  @Put(':id')
  async update (@Param('id') id: number, @Body() user: User): Promise<any> {
    return this.usersService.update(id, user);
  }

  //delete user
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.usersService.delete(id);
  }
  */
}
