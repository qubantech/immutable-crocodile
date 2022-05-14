import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Zone } from "../../models/zone.model";

@ApiTags('Zones')
@Controller('zones')
export class ZonesController {
  constructor(private readonly zonesService: ZonesService) {}

  @ApiOperation({ summary: 'Create zone' })
  @ApiResponse({ status: 200, type: Zone })
  @Post()
  create(@Body() createZoneDto: CreateZoneDto) {
    return this.zonesService.create(createZoneDto);
  }

  @ApiOperation({ summary: 'Find all zones' })
  @ApiResponse({ status: 200, type: [Zone] })
  @Get()
  findAll() {
    return this.zonesService.findAll();
  }


  @ApiOperation({ summary: 'Get zone by id' })
  @ApiResponse({ status: 200, type: Zone })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zonesService.findOne(+id);
  }

}
