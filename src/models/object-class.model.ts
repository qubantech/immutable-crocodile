import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Snapshot } from "./snapshot.model";
import { SnapshotObjectClasses } from "./snapshot-object-classes.model";

interface ObjectClassCreationAttrs {
    nameToken: string;
    description: string;
}

@Table({
    tableName: 'object_classes',
})
export class ObjectClass extends Model<ObjectClass, ObjectClassCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Большой мусор', description: 'Unique category identifier token' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    nameToken: string;

    @ApiProperty({ example: 'Описание про мусор', description: 'Category description' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @BelongsToMany(() => Snapshot, () => SnapshotObjectClasses)
    snapshots: Snapshot[];
}