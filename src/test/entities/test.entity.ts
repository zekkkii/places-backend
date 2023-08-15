import { BaseEntity } from 'src/crud-base/baseEntity/BaseEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class Test extends BaseEntity {
  //   @PrimaryGeneratedColumn()
  //   id: number;

  @Column()
  asd: string;
}
