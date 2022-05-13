import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Event } from "./event.model";

interface CameraCreationAttrs {
    id: string;
    address: string;
    latitude: number;
    longitude: number;
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

    @HasMany(() => Event)
    events: Event[];
}