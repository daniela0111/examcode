import { Controller, Get, Req } from '@nestjs/common';

@Controller('bill') //this is URL path
export class BillController {
  // constructor dependency injection of HotelsService
  //constructor(private readonly hotelService: HotelsService) { }

  @Get() // default GET response on /hotels
  findAll(@Req() req: Request): string {
    console.log(req);
    return 'This action return all bills in the system';
  }
}
