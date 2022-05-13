import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { User } from './users.model';
import { Role } from './roles.model';
import { Snapshot } from "./snapshot.model";
import { ObjectClass } from "./object-class.model";

@Table({
    tableName: 'snapshot_object_classes',
    createdAt: false,
    updatedAt: false,
})
export class SnapshotObjectClasses extends Model<SnapshotObjectClasses> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Snapshot)
    @Column({
        type: DataType.INTEGER,
    })
    snapshotId: number;

    @ForeignKey(() => ObjectClass)
    @Column({
        type: DataType.INTEGER,
    })
    classId: number;
}
