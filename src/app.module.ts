import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Camera } from "./models/camera.model";
import { Contractor } from "./models/contractor.model";
import { ContractorZones } from "./models/contractor-zones.model";
import { Event } from "./models/event.model";
import { ObjectClass } from "./models/object-class.model";
import { Role } from "./models/role.model";
import { Servant } from "./models/servant.model";
import { ServantZones } from "./models/servant-zones.model";
import { Snapshot } from "./models/snapshot.model";
import { SnapshotObjectClasses } from "./models/snapshot-object-classes.model";
import { User } from "./models/user.model";
import { UserRoles } from "./models/user-roles.model";
import { Zone } from "./models/zone.model";
import { CamerasModule } from './modules/cameras/cameras.module';
import { ContractorsModule } from './modules/contractors/contractors.module';
import { ServantsModule } from './modules/servants/servants.module';
import { ZonesModule } from './modules/zones/zones.module';
import { ObjectClassesModule } from './modules/object-classes/object-classes.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
          Camera,
          Contractor,
          ContractorZones,
          Event,
          ObjectClass,
          Role,
          Servant,
          ServantZones,
          Snapshot,
          SnapshotObjectClasses,
          User,
          UserRoles,
          Zone
      ],
      autoLoadModels: true,
      ssl: true,
    }),
    CamerasModule,
    ContractorsModule,
    ServantsModule,
    ZonesModule,
    ObjectClassesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}