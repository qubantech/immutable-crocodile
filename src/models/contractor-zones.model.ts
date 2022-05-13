import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { Contractor } from "./contractor.model";
import { Zone } from "./zone.model";

@Table({
    tableName: 'contractor_zones',
    createdAt: false,
    updatedAt: false,
})
export class ContractorZones extends Model<ContractorZones> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Contractor)
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
