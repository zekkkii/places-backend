import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { ProfileController } from './empresa.controller';
import { EmpresaEntity } from './entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaEntity])],
  controllers: [ProfileController],
  providers: [EmpresaService],
})
export class EmpresaModule {}
