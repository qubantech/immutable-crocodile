import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServantDto } from './dto/create-servant.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Servant } from "../../models/servant.model";
import { Zone } from "../../models/zone.model";

@Injectable()
export class ServantsService {
  constructor(
      @InjectModel(Servant)
      private servantsRepository: typeof Servant,
  ) {}

  async create(createServantDto: CreateServantDto) {
    const servant = await this.servantsRepository
        .create(createServantDto)
    await servant.$add('zones', createServantDto.zones);
    return servant;
  }

  async findAll() {
    const servantsList = await this.servantsRepository
        .findAll({
          include: { model: Zone }
        })
    return servantsList;
  }

  async findOne(id: number) {
    const servant = await this.servantsRepository
        .findOne({
          include: { model: Zone },
          where: { id },
        })
    if(!servant){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return servant;
  }

}
