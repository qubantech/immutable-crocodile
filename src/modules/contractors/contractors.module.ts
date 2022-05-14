import { Module } from '@nestjs/common';
import { ContractorsService } from './contractors.service';
import { ContractorsController } from './contractors.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Contractor } from "../../models/contractor.model";

@Module({
  controllers: [ContractorsController],
  providers: [ContractorsService],
  imports: [SequelizeModule.forFeature([Contractor])],
})
export class ContractorsModule {}
