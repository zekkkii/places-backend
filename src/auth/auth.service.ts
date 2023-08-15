import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/util/bycript';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(authPayload: AuthDto) {
    const user = await this.userService.findOneByEmailOrUserName(
      authPayload.userOrEmail,
    );

    if (!user) {
      throw new NotFoundException('User or email not found.');
    }

    const isValidPassword = await comparePassword(
      authPayload.password,
      user.password,
    );

    if (!isValidPassword) throw new ForbiddenException('Incorrect password.');

    const payload = {
      username: authPayload.userOrEmail,
      password: authPayload.password,
    };

    const token = this.jwtService.sign(payload, { expiresIn: '15min' });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '15min',
      secret: `${process.env.REFRESH_JWT_KEY}`,
    });

    return {
      accessToken: token,
      refreshToken,
    };
  }

  //TODO
  async refreshToken(payload: string) {
    // let token = null;
    // this.jwtService.verify('', (err: any, result: any) => {
    //   if (err) throw new UnauthorizedException();
    //   token = this.jwtService.sign(result);
    // });
    // return login()
    return payload;
  }
}
