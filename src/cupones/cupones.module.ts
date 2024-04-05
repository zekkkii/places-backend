import { Module } from '@nestjs/common';
import { CuponesService } from './cupones.service';
import { ProfileController } from './cupones.controller';
import { CuponesEntity } from './entities/cupones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CuponesEntity])],
  controllers: [ProfileController],
  providers: [EmpresaService],
})
export class CuponesModule {}
