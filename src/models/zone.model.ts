import { Column, DataType, Model, Table, HasMany, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Contractor } from "./contractor.model";
import { ContractorZones } from "./contractor-zones.model";

interface ZoneCreationAttrs {
    nameToken: string;
    description: string;
}

@Table({
    tableName: 'zones',
})
export class Zone extends Model<Zone, ZoneCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Район А', description: 'Zone name token' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nameToken: string;


    @ApiProperty({ example: 'Описание', description: 'Zone description' })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description: string;

    @BelongsToMany(() => Contractor, () => ContractorZones)
    contractors: Contractor[];
}