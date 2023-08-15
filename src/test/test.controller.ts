import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { CrudBaseController } from 'src/crud-base/crud-controller-base-class';
import { Test } from './entities/test.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudBaseService } from 'src/crud-base/crud-service-base-class';

@Controller('test')
export class TestController extends CrudBaseController<Test> {
  constructor(public service: CrudBaseService<Test>) {
    super(service);
  }
}
