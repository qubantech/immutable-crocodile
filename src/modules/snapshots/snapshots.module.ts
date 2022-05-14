import { Module } from '@nestjs/common';
import { SnapshotsService } from './snapshots.service';
import { SnapshotsController } from './snapshots.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Snapshot } from "../../models/snapshot.model";

@Module({
  controllers: [SnapshotsController],
  providers: [SnapshotsService],
  imports: [SequelizeModule.forFeature([Snapshot])],
})
export class SnapshotsModule {}
