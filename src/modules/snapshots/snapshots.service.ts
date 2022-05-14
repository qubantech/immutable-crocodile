import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { InjectModel } from "@nestjs/sequelize";
import { Snapshot } from "../../models/snapshot.model";

@Injectable()
export class SnapshotsService {
  constructor(
      @InjectModel(Snapshot)
      private snapshotsRepository: typeof Snapshot,
  ) {}

  async create(createSnapshotDto: CreateSnapshotDto) {
    const snapshot = await this.snapshotsRepository
        .create(createSnapshotDto)
    await snapshot.$add('objectClasses', createSnapshotDto.objectClassIds)
    await snapshot.$add('event', createSnapshotDto.eventId)
    return snapshot;
  }

  async findAll() {
    const snapshots = await this.snapshotsRepository
        .findAll({
          include: { all: true },
        })
    return snapshots;
  }

  async findOne(id: number) {
    const snapshot = await this.snapshotsRepository
        .findOne({
          include: { all: true },
          where: { id },
        })
    if(!snapshot){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return snapshot;
  }
}
