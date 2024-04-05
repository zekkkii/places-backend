import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CuponesService } from './cupones.service';
import { CreateCuponesDto } from './dto/create-cupones.dto';
import { UpdateCuponesDto } from './dto/update-cupones.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cupones')
@Controller('cupones')
export class ProfileController {
  constructor(private readonly service: CuponesService) {}

  @Post()
  create(@Body() createProfileDto: CreateCuponesDto) {
    return this.service.create(createProfileDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Body() dto: UpdateCuponesDto) {
    return this.service.update(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
