import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from './video.entity';
import { CreateVideoDto } from './create-video.dto';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private videosRepository: Repository<Video>,
  ) {}

  async create(createVideoDto: CreateVideoDto): Promise<Video> {
    const newVideo = this.videosRepository.create(createVideoDto); // Create a new User entity
    return this.videosRepository.save(newVideo); // Save it to the database
  }

  // Optionally add methods to fetch users for verification or other purposes
  async findAll(): Promise<Video[]> {
    return this.videosRepository.find();
  }

  async delete(id: number): Promise<void> {
    const result = await this.videosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
  }
}
