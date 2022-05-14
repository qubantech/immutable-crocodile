import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Event } from "../../models/event.model";

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiOperation({ summary: 'Create event' })
  @ApiResponse({ status: 200, type: Event })
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @ApiOperation({ summary: 'Get events list' })
  @ApiResponse({ status: 200, type: [Event] })
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @ApiOperation({ summary: 'Get event by id' })
  @ApiResponse({ status: 200, type: Event })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

}
