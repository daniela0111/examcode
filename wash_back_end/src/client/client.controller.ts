import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('client')
export class ClientController {
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
}
