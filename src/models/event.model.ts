import { Column, DataType, Model, Table, HasMany, BelongsTo } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Snapshot } from "./snapshot.model";
import { Camera } from "./camera.model";

interface EventCreationAttrs {
    id: string;
    startTime: string;
    endTime: string;
}

@Table({
    tableName: 'events',
})
export class Event extends Model<Event, EventCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Большой мусор', description: 'Event start timestamp' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    startTime: string;

    @ApiProperty({ example: 'Описание про мусор', description: 'Event end timestamp' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    endTime: string;

    @HasMany(() => Snapshot)
    snapshots: Snapshot[];

    @BelongsTo(() => Camera)
    camera: Camera;
}