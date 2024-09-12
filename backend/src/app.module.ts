import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VideoModule } from './video/video.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // or the name of the MySQL container
      port: 3306,
      username: 'nest_user',
      password: 'nest_password',
      database: 'nest_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Add your entity classes here
      synchronize: true, // Automatically synchronize entities with the database (disable in production)
    }),
    VideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
