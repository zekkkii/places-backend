import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.service.create(createProfileDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Body() dto: UpdateProfileDto) {
    return this.service.update(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
