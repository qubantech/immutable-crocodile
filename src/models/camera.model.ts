import { Column, DataType, Model, Table, HasMany, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Event } from "./event.model";
import { Zone } from "./zone.model";

interface CameraCreationAttrs {
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    zoneId: number;
}

@Table({
    tableName: 'cameras',
})
export class Camera extends Model<Camera, CameraCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'ул. Пушкина д. Колотушкина', description: 'Address' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @ApiProperty({ example: '38.8951', description: 'Latitude' })
    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    latitude: number;

    @ApiProperty({ example: '-77.0364', description: 'Longitude' })
    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    longitude: number;

    @ForeignKey(() => Zone)
    zoneId: number;

    @HasMany(() => Event)
    events: Event[];
}