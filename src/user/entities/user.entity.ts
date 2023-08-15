import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column({ name: 'account_type' })
  accountType: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column({ name: 'suspended', type: Boolean })
  suspended: boolean;

  @Column({ name: 'email_confirmed', type: Boolean })
  emailConfirmed: boolean;

  @Column({ name: 'active', type: Boolean })
  deleted: boolean;
}
