import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title' })
  title: string;

  @ManyToOne(() => User, (user) => user.id)
  realatedUser: number;

  @OneToMany(() => Comment, (comment) => comment.id)
  comments: Comment[];

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'category' })
  category: string;

  @Column({ name: 'url_source' })
  urlSource: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column({ name: 'active', type: Boolean })
  deleted: boolean;
}
