import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { BaseEntity } from './baseEntity/BaseEntity';

// @Injectable()
export class CrudBaseService<T extends BaseEntity> {
  constructor(public repository: Repository<T>) {}

  async create(dto: T) {
    return await this.repository.save(dto);
  }

  async findAll() {
    const data = await this.repository.find();
    if (data.length < 1) throw new NotFoundException();
    return data;
  }

  async findOne(id: number) {
    const elem = await this.repository.findBy({
      id,
    } as FindOptionsWhere<T>);
    if (!elem) throw new NotFoundException();
    return elem;
  }

  async update(updateNoteDto: T) {
    const elem = await this.repository.findBy({
      id: updateNoteDto.id,
    } as FindOptionsWhere<T>);
    if (!elem) throw new NotFoundException();
    return await this.repository.save(updateNoteDto);
  }

  async remove(id: number) {
    const elem = await this.repository.findBy({
      id,
    } as FindOptionsWhere<T>);
    if (!elem) throw new NotFoundException();
    return await this.repository.softDelete(id);
  }
}
