import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { ServiceController } from './service/service.controller';
import { ServiceModule } from './service/service.module';
import { ConfigModule } from '@nestjs/config';

import typeorm from './config/postgresDataSource';
import { DatabaseModule } from './config/database.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [typeorm] }),
    DatabaseModule,
    ServiceModule,
    DatabaseModule.forRoot(),
  ],
  controllers: [AppController, ServiceController],
  providers: [AppService],
})
export class AppModule {}
