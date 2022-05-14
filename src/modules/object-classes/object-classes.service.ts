import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateObjectClassDto } from './dto/create-object-class.dto';
import { ObjectClass } from "../../models/object-class.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class ObjectClassesService {
  constructor(
      @InjectModel(ObjectClass)
      private objectClassesRepository: typeof ObjectClass,
  ) {}

  async create(createObjectClassDto: CreateObjectClassDto) {
    const objectClass = await this.objectClassesRepository
        .create(createObjectClassDto)
    return objectClass;
  }

  async findAll() {
    const objectClassList = await this.objectClassesRepository.findAll()
    return objectClassList;
  }

  async findOne(id: number) {
    const objectClass = await this.objectClassesRepository.findOne({
      where: { id },
    })
    if(!objectClass){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return objectClass;
  }

}
