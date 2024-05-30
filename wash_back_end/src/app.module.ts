import { Module, SetMetadata } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { ServiceController } from './service/service.controller';
import { ServiceModule } from './service/service.module';
import { ConfigModule } from '@nestjs/config';

import typeorm from './config/postgresDataSource';
import { DatabaseModule } from './config/database.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [typeorm] }),
    DatabaseModule,
    ServiceModule,
    DatabaseModule.forRoot(),
    ClientModule,
    AuthModule,
  ],
  controllers: [AppController, ServiceController],
  providers: [AppService],
})
export class AppModule {}

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);