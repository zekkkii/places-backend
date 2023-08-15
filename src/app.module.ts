import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from './config/config';
import { DatabaseConfig } from './config/database.config';

import { TestModule } from './test/test.module';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? `.env` : '.env.${ENV}',
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
