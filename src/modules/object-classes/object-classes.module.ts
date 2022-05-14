import { Module } from '@nestjs/common';
import { ObjectClassesService } from './object-classes.service';
import { ObjectClassesController } from './object-classes.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { ObjectClass } from "../../models/object-class.model";

@Module({
  controllers: [ObjectClassesController],
  providers: [ObjectClassesService],
  imports: [SequelizeModule.forFeature([ObjectClass])],
})
export class ObjectClassesModule {}
