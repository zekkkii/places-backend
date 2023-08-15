import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>,
  ) {}
  async create(dto: CreateCommentDto) {
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

  async update(dto: UpdateCommentDto) {
    return await this.repository.save(dto);
  }

  async remove(id: number) {
    const post = await this.repository.findOne({ where: { id } });
    if (!post) throw new NotFoundException('Comment not found.');
    post.deleted = true;
    this.repository.save(post);
    return;
  }
}
