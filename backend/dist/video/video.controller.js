"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
const create_video_dto_1 = require("./create-video.dto");
let VideoController = class VideoController {
    constructor(videosService) {
        this.videosService = videosService;
    }
    async create(createVideoDto) {
        return this.videosService.create(createVideoDto);
    }
    async findAll() {
        return this.videosService.findAll();
    }
};
exports.VideoController = VideoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_video_dto_1.CreateVideoDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "findAll", null);
exports.VideoController = VideoController = __decorate([
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
//# sourceMappingURL=video.controller.js.map