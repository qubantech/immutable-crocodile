import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../models/user.model';
import { GiveRoleDto } from './dto/give-role.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({ summary: 'Get all users list' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({ summary: 'Give a role' })
    @ApiResponse({ status: 200 })
    @Post('/role')
    giveRole(@Body() dto: GiveRoleDto) {
        return this.usersService.giveRole(dto);
    }
}
