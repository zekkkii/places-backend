import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileEntity } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private repository: Repository<ProfileEntity>,
  ) {}
  async create(dto: CreateProfileDto) {
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

  async update(dto: UpdateProfileDto) {
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
