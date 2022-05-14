import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ContractorsService } from './contractors.service';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Contractor } from "../../models/contractor.model";

@ApiTags('Contractors')
@Controller('contractors')
export class ContractorsController {
  constructor(private readonly contractorsService: ContractorsService) {}

  @ApiOperation({ summary: 'Create contractor' })
  @ApiResponse({ status: 200, type: Contractor })
  @Post()
  create(@Body() createContractorDto: CreateContractorDto) {
    return this.contractorsService.create(createContractorDto);
  }

  @ApiOperation({ summary: 'Get contractors list' })
  @ApiResponse({ status: 200, type: [Contractor] })
  @Get()
  findAll() {
    return this.contractorsService.findAll();
  }

  @ApiOperation({ summary: 'Get contractor' })
  @ApiResponse({ status: 200, type: Contractor })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractorsService.findOne(+id);
  }

}
