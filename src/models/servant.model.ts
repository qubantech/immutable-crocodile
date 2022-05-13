import { Column, DataType, Model, Table, HasMany, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Event } from "./event.model";
import { Zone } from "./zone.model";
import { ContractorZones } from "./contractor-zones.model";
import { ServantZones } from "./servant-zones.model";

interface ServentCreationAttrs {
    firstname: string;
    lastname: string;
    middlename: string;
    phone: string;
    workStartTime: string;
    workEndTime: string;
}

@Table({
    tableName: 'servants',
})
export class Servant extends Model<Servant, ServentCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Иван', description: 'First name' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: string;

    @ApiProperty({ example: 'Иванов', description: 'Last name' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname: string;

    @ApiProperty({ example: 'Иванович', description: 'Middle name' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    middlename: string;

    @ApiProperty({ example: '88005553535', description: 'Contact phone number' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone: string;

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

    @BelongsToMany(() => Zone, () => ServantZones)
    zones: Zone[];
}