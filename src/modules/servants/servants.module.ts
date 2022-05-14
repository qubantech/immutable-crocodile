import { Module } from '@nestjs/common';
import { ServantsService } from './servants.service';
import { ServantsController } from './servants.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Servant } from "../../models/servant.model";

@Module({
  controllers: [ServantsController],
  providers: [ServantsService],
  imports: [SequelizeModule.forFeature([Servant])],
})
export class ServantsModule {}
