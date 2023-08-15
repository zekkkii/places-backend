import { userInfo } from 'os';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
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
