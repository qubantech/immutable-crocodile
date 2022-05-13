import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "./users.model";
import { UserRoles } from "./user-roles.model";
import { ObjectClass } from "./object-class.model";
import { SnapshotObjectClasses } from "./snapshot-object-classes.model";

interface SnapshotCreationAttrs {
    id: string;
    time: string;
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

    @ApiProperty({ example: 'ADMIN', description: 'Unique role identifier' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    time: string;

    @BelongsToMany(() => ObjectClass, () => SnapshotObjectClasses)
    snapshots: Snapshot[];
}