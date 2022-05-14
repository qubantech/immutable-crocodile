import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Contractor } from "../../models/contractor.model";
import { Zone } from "../../models/zone.model";

@Injectable()
export class ContractorsService {
  constructor(
      @InjectModel(Contractor)
      private contractorsRepository: typeof Contractor,
  ) {}

  async create(createContractorDto: CreateContractorDto) {
    const contractor = await this.contractorsRepository
        .create(createContractorDto)
    await contractor.$add('zones', createContractorDto.zones);
    return contractor;
  }

  async findAll() {
    const contractorsList = await this.contractorsRepository
        .findAll({
          include: { model: Zone }
        })
    return contractorsList;
  }

  async findOne(id: number) {
    const contractor = await this.contractorsRepository
        .findOne({
          include: { model: Zone },
          where: { id },
        })
    if(!contractor){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return contractor;
  }

}
