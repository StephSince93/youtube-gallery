import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { Video } from './video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
