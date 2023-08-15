import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { BaseEntity } from './baseEntity/BaseEntity';
import { CrudBaseService } from './crud-service-base-class';

@Controller('test')
export class CrudBaseController<E extends BaseEntity> {
  constructor(public readonly service: CrudBaseService<E>) {}

  @Post('create')
  async create(@Body() dto: E) {
    return await this.service.create(dto);
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return await this.service.findOne(+id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateDto: E) {
    return await this.service.update(updateDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(+id);
  }
}
