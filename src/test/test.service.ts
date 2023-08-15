import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudBaseService } from 'src/crud-base/crud-service-base-class';
import { BaseEntity, Repository } from 'typeorm';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService extends CrudBaseService<Test> {
  constructor(
    @InjectRepository(Test)
    public repository: Repository<Test>,
  ) {
    super(repository);
  }
}
