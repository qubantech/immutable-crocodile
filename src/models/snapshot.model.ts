import { BelongsToMany, Column, DataType, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectClass } from "./object-class.model";
import { SnapshotObjectClasses } from "./snapshot-object-classes.model";
import { Event } from "./event.model";

interface SnapshotCreationAttrs {
    id: string;
    time: string;
    imageUrl: string;
}

@Table({
    tableName: 'snapshots',
})
export class Snapshot extends Model<Snapshot, SnapshotCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: '18:34:22', description: 'Snapshot timestamp' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    time: string;

    @ApiProperty({ example: 'www.objectstorage.com/imageid', description: 'Image fragment url' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    imageUrl: string;

    @BelongsToMany(() => ObjectClass, () => SnapshotObjectClasses)
    objectClasses: ObjectClass[];

    @ForeignKey(() => Event)
    event: Event;
}