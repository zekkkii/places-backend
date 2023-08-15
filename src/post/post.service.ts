import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const post = {
      ...createPostDto,
      deleted: false,
    };
    return await this.repository.save(post);
  }

  async findOne(id: number) {
    return await this.repository.findOne({
      where: { id, deleted: false },
    });
  }

  async update(updatePostDto: UpdatePostDto) {
    return await this.repository.save(updatePostDto);
  }

  async remove(id: number) {
    const post = await this.repository.findOne({ where: { id } });
    if (!post) throw new NotFoundException('Post not found.');
    post.deleted = true;
    this.repository.save(post);
    return;
  }
}
