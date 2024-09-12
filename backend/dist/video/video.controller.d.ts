import { VideoService } from './video.service';
import { CreateVideoDto } from './create-video.dto';
import { Video } from './video.entity';
export declare class VideoController {
    private readonly videosService;
    constructor(videosService: VideoService);
    create(createVideoDto: CreateVideoDto): Promise<Video>;
    findAll(): Promise<Video[]>;
}
