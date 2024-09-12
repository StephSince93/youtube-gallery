import { Repository } from 'typeorm';
import { Video } from './video.entity';
import { CreateVideoDto } from './create-video.dto';
export declare class VideoService {
    private videosRepository;
    constructor(videosRepository: Repository<Video>);
    create(createVideoDto: CreateVideoDto): Promise<Video>;
    findAll(): Promise<Video[]>;
}
