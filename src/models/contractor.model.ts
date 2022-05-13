import { Column, DataType, Model, Table, HasMany, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Event } from "./event.model";
import { Zone } from "./zone.model";
import { ContractorZones } from "./contractor-zones.model";

interface ContractorCreationAttrs {
    legalEntityName: string;
    contactEmail: string;
    contactPhone: string;
    officialPhone: string;
    workStartTime: string;
    workEndTime: string;
}

@Table({
    tableName: 'contractors',
})
export class Contractor extends Model<Contractor, ContractorCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'ООО Малина', description: 'Legal entity name' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    legalEntityName: string;

    @ApiProperty({ example: 'example@email.com', description: 'Contact email' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    contactEmail: string;

    @ApiProperty({ example: '88005553535', description: 'Contact phone number' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    contactPhone: string;

    @ApiProperty({ example: '88005553535', description: 'Official phone number' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    officialPhone: string;

    @ApiProperty({ example: '9:30', description: 'Work start time' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    workStartTime: string;


    @ApiProperty({ example: '18:00', description: 'Work start time' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    workEndTime: string;

    @BelongsToMany(() => Zone, () => ContractorZones)
    zones: Zone[];
}