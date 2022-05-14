import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Zone } from "../../models/zone.model";

@Injectable()
export class ZonesService {
  constructor(
      @InjectModel(Zone)
      private zonesRepository: typeof Zone,
  ) {}

  async create(createZoneDto: CreateZoneDto) {
    const zone = await this.zonesRepository.create(createZoneDto)
    return zone;
  }

  async findAll() {
    const zone = await this.zonesRepository.findAll()
    return zone;
  }

  async findOne(id: number) {
    const zone = await this.zonesRepository.findOne({
      where: { id }
    })
    if (!zone){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
    return zone
  }
}
