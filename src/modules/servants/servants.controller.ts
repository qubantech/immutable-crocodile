import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ServantsService } from './servants.service';
import { CreateServantDto } from './dto/create-servant.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Servant } from "../../models/servant.model";

@ApiTags('Servants')
@Controller('servants')
export class ServantsController {
  constructor(private readonly servantsService: ServantsService) {}


  @ApiOperation({ summary: 'Create servant' })
  @ApiResponse({ status: 200, type: Servant })
  @Post()
  create(@Body() createServantDto: CreateServantDto) {
    return this.servantsService.create(createServantDto);
  }

  @ApiOperation({ summary: 'Get servants list' })
  @ApiResponse({ status: 200, type: [Servant] })
  @Get()
  findAll() {
    return this.servantsService.findAll();
  }

  @ApiOperation({ summary: 'Get servant by id' })
  @ApiResponse({ status: 200, type: Servant })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servantsService.findOne(+id);
  }
}
