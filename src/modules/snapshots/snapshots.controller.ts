import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SnapshotsService } from './snapshots.service';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Snapshot } from "../../models/snapshot.model";

@ApiTags('Snapshots')
@Controller('snapshots')
export class SnapshotsController {
  constructor(private readonly snapshotsService: SnapshotsService) {}

  @ApiOperation({ summary: 'Create snapshot' })
  @ApiResponse({ status: 200, type: Snapshot })
  @Post()
  create(@Body() createSnapshotDto: CreateSnapshotDto) {
    return this.snapshotsService.create(createSnapshotDto);
  }

  @ApiOperation({ summary: 'Get snapshots list' })
  @ApiResponse({ status: 200, type: [Snapshot] })
  @Get()
  findAll() {
    return this.snapshotsService.findAll();
  }

  @ApiOperation({ summary: 'Get snapshot by id' })
  @ApiResponse({ status: 200, type: Snapshot })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.snapshotsService.findOne(+id);
  }
}
