import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from '../client/dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')

export class ClientController {
  clientService: any;
  constructor(private readonly usersService: ClientService) {}

  @Get()
  findAll(@Req() req: Request): string {
    console.log(req);
    return 'This action return all clients in the system';
  }

  @Post('/createClient')
  create(@Req() req: Request): string {
    //const client = new Client();
    // todo: add data to the client object and save it into database
    console.log('Creating a new client', req.body);
    return 'New client created';

  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
