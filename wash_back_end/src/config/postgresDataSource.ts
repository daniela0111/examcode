import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { Service } from '../service/service.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Client } from '../client/client.entity';

dotenvConfig({ path: '.env' });

export const typeOrmDbConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 5434,
  userName: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Service, Client],
  //entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/**/*migrations.ts'],
  //autoLoadEntities: true,
  //synchronize: false,
  cli: {
    migrationsDir: 'dist/migrations',
  },
};
export function getOrmConfig() {
  return typeOrmDbConfig;
}

export default registerAs('typeorm', () => typeOrmDbConfig);
export const connectionSource = new DataSource(
  typeOrmDbConfig as DataSourceOptions,
);
