import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCuponesDto } from './dto/create-cupones.dto';
import { UpdateCuponesDto } from './dto/update-cupones.dto';
import { CuponesEntity } from './entities/cupones.entity';

@Injectable()
export class CuponesService {
  constructor(
    @InjectRepository(CuponesEntity)
    private repository: Repository<CuponesEntity>,
  ) {}
  async create(dto: CreateCuponesDto) {
    const post = {
      ...dto,
      deleted: false,
    };
    return await this.repository.save(post);
  }

  async findOne(id: number) {
    return await this.repository.findOne({
      where: { id, deleted: false },
    });
  }

  async update(dto: UpdateCuponesDto) {
    return await this.repository.save(dto);
  }

  async remove(id: number) {
    const post = await this.repository.findOne({ where: { id } });
    if (!post) throw new NotFoundException('Profile not found.');
    post.deleted = true;
    this.repository.save(post);
    return;
  }
}
