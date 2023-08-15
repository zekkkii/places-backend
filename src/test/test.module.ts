import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { CrudBaseController } from 'src/crud-base/crud-controller-base-class';
import { CrudBaseService } from 'src/crud-base/crud-service-base-class';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController, CrudBaseController],
  providers: [CrudBaseService, TestService],
})
export class TestModule {}
