import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Zone } from "../../models/zone.model";

@Module({
  imports: [SequelizeModule.forFeature([Zone])],
  controllers: [ZonesController],
  providers: [ZonesService]
})
export class ZonesModule {}
