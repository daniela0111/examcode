import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from './postgresDataSource';
import { DynamicModule } from '@nestjs/common';

export class DatabaseModule {
  public static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      //@ts-expect-error //know issue for passing config not directy but as variable
      imports: [TypeOrmModule.forRoot(getOrmConfig())],
      //components: [DatabaseService],
      //exports: [DatabaseService],
    };
  }
}
