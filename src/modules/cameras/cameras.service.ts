import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCameraDto } from './dto/create-camera.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Camera } from "../../models/camera.model";

@Injectable()
export class CamerasService {
  constructor(
      @InjectModel(Camera)
      private cameraRepository: typeof Camera,
  ) {}

  async create(createCameraDto: CreateCameraDto) {
    const camera = await this.cameraRepository
        .create(createCameraDto)
    await camera.$add('events', createCameraDto.events);
    await camera.$add('zoneId', createCameraDto.zoneId);
    return camera;
  }

  async findAll() {
    const camerasList = await this.cameraRepository
        .findAll({
          include: { all: true }
        })
    return camerasList;
  }

  async findOne(id: number) {
    const camera = await this.cameraRepository
        .findOne({
          include: { all: true },
          where: { id },
        })
    if(!camera){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return camera;
  }
}
