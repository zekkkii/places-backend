import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/util/bycript';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const password: any = (await hashPassword(
      createUserDto.password,
    )) as string;

    const userNameExist = await this.findOneByUserName(createUserDto.userName);

    if (userNameExist) {
      throw new ForbiddenException(
        `User with name: ${createUserDto.userName} already exist.`,
      );
    }

    const user = {
      ...createUserDto,
      password,
      suspended: false,
      deleted: false,
      emailConfirmed: false,
    };

    return await this.repository.save(user);
  }

  async findOneByUserName(userName: string) {
    return await this.repository.findOne({
      where: {
        userName,
      },
    });
  }

  async findOneByEmailOrUserName(payload: string) {
    return await this.repository.findOne({
      where: [
        { email: payload },
        {
          userName: payload,
        },
      ],
    });
  }

  async findOne(id: number) {
    return await this.repository.findOne({
      where: { id, deleted: false },
    });
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.repository.save(updateUserDto);
  }

  async remove(id: number) {
    const user = await this.repository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found.');
    user.deleted = true;
    user.suspended = false;
    this.repository.save(user);

    return;
  }
}
