import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { Bill } from './bill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  providers: [BillService],
  controllers: [BillController],
})
export class BillModule {}
