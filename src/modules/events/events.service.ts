import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "../../models/event.model";

@Injectable()
export class EventsService {
  constructor(
      @InjectModel(Event)
      private eventsRepository: typeof Event,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = await this.eventsRepository
        .create(createEventDto)
    await event.$add('snapshots', createEventDto.snapshots)
    await event.$add('camera', createEventDto.camera)
    return event;
  }

  async findAll() {
    const events = await this.eventsRepository
        .findAll({
          include: { all: true },
        })
    return events;
  }

  async findOne(id: number) {
    const event = await this.eventsRepository
        .findOne({
          include: { all: true },
          where: { id },
        })
    if(!event){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return event;
  }
}
