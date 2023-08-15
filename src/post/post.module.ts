import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from 'src/comments/comment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), CommentModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
