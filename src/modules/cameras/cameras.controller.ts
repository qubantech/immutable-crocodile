import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CamerasService } from './cameras.service';
import { CreateCameraDto } from './dto/create-camera.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Camera } from "../../models/camera.model";

@ApiTags('Cameras')
@Controller('cameras')
export class CamerasController {
  constructor(private readonly camerasService: CamerasService) {}

  @ApiOperation({ summary: 'Create camera' })
  @ApiResponse({ status: 200, type: Camera })
  @Post()
  create(@Body() createCameraDto: CreateCameraDto) {
    return this.camerasService.create(createCameraDto);
  }

  @ApiOperation({ summary: 'Get all cameras list' })
  @ApiResponse({ status: 200, type: [Camera] })
  @Get()
  findAll() {
    return this.camerasService.findAll();
  }

  @ApiOperation({ summary: 'Get camera by id' })
  @ApiResponse({ status: 200, type: Camera })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.camerasService.findOne(+id);
  }
}
