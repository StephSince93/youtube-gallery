import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './create-video.dto';
import { Video } from './video.entity';

@Controller('videos') // This sets up the route as '/users'
export class VideoController {
  constructor(private readonly videosService: VideoService) {}

  // Create a new user with a POST request
  @Post()
  async create(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videosService.create(createVideoDto);
  }

  // Optionally fetch all users with a GET request
  @Get()
  async findAll(): Promise<Video[]> {
    return this.videosService.findAll();
  }
  @Delete(':id')
  async deleteVideo(@Param('id') id: number): Promise<void> {
    return this.videosService.delete(id);
  }
}
