import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from '../../models/role.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../models/user.model';

@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [SequelizeModule.forFeature([Role, User])],
    exports: [RolesService],
})
export class RolesModule {}
