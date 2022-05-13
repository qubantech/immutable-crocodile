import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { Zone } from "./zone.model";
import { Servant } from "./servant.model";

@Table({
    tableName: 'servant_zones',
    createdAt: false,
    updatedAt: false,
})
export class ServantZones extends Model<ServantZones> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Servant)
    @Column({
        type: DataType.INTEGER,
    })
    contractorId: number;

    @ForeignKey(() => Zone)
    @Column({
        type: DataType.INTEGER,
    })
    zoneId: number;
}
