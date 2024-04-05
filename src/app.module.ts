import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comments/comment.module';
import { configuration } from './config/config';
import { DatabaseConfig } from './config/database.config';
import { PostModule } from './post/post.module';
import { ProfileModule } from './Profile/profile.module';
import { EmpresaModule } from './empresa/empresa.module';
import { CuponesModule } from './cupones/cupones.module';

// import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? `.env` : '.env.${ENV}',
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    // TestModule,
    PostModule,
    UserModule,
    AuthModule,
    CommentModule,
    ProfileModule,
    EmpresaModule,
    CuponesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
