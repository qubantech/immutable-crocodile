import { Module } from '@nestjs/common';
import { CamerasService } from './cameras.service';
import { CamerasController } from './cameras.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Camera } from "../../models/camera.model";
import { Event } from "../../models/event.model";

@Module({
  controllers: [CamerasController],
  providers: [CamerasService],
  imports: [SequelizeModule.forFeature([Camera, Event])],
})
export class CamerasModule {}
