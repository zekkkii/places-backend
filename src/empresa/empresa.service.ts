import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresaEntity } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(EmpresaEntity)
    private repository: Repository<EmpresaEntity>,
  ) {}
  async create(dto: CreateEmpresaDto) {
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

  async update(dto: UpdateEmpresaDto) {
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
