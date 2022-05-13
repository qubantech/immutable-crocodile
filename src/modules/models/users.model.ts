import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from './roles.model';
import { UserRoles } from './user-roles.model';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({
    tableName: 'users',
})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '42', description: 'Unique identifier' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'user@mail.com', description: 'Email address' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @ApiProperty({ example: 'f@J4Sd3$lsc#!', description: 'Password' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @ApiProperty({ example: 'Иван', description: 'Firstname' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: string;

    @ApiProperty({ example: 'Иванов', description: 'Lastname' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname: string;

    @ApiProperty({ example: 'Иванович', description: 'Middlename' })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    middlename: string;

    @ApiProperty({ example: '88005553535', description: 'Phone number' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

}
