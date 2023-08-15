import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import JwtRefreshGuard from './jwt-refresh.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  create(@Body() payload: AuthDto) {
    return this.authService.login(payload);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh-token')
  refreshToken(@Body() refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}
