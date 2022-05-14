import { Injectable } from '@nestjs/common';
import { CreateCameraDto } from './dto/create-camera.dto';

@Injectable()
export class CamerasService {
  create(createCameraDto: CreateCameraDto) {
    return 'This action adds a new camera';
  }

  findAll() {
    return `This action returns all cameras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} camera`;
  }
}
