import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ObjectClassesService } from './object-classes.service';
import { CreateObjectClassDto } from './dto/create-object-class.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ObjectClass } from "../../models/object-class.model";

@ApiTags('Object classes')
@Controller('object-classes')
export class ObjectClassesController {
  constructor(private readonly objectClassesService: ObjectClassesService) {}

  @ApiOperation({ summary: 'Create object class' })
  @ApiResponse({ status: 200, type: ObjectClass })
  @Post()
  create(@Body() createObjectClassDto: CreateObjectClassDto) {
    return this.objectClassesService.create(createObjectClassDto);
  }

  @ApiOperation({ summary: 'Get all object classes list' })
  @ApiResponse({ status: 200, type: [ObjectClass] })
  @Get()
  findAll() {
    return this.objectClassesService.findAll();
  }

  @ApiOperation({ summary: 'Find one object class' })
  @ApiResponse({ status: 200, type: ObjectClass })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectClassesService.findOne(+id);
  }

}
