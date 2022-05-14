import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Contractor } from "../../models/contractor.model";
import { Event } from "../../models/event.model";

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [SequelizeModule.forFeature([Event])],
})
export class EventsModule {}
