import { ApiProperty } from "@nestjs/swagger";
import { Zone } from "../../../models/zone.model";

export class CreateServantDto {
    @ApiProperty({ example: 'Иван', description: 'First name' })
    firstname: string;

    @ApiProperty({ example: 'Иванов', description: 'Last name' })
    lastname: string;

    @ApiProperty({ example: 'Иванович', description: 'Middle name' })
    middlename: string;

    @ApiProperty({ example: '88005553535', description: 'Contact phone number' })
    phone: string;

    @ApiProperty({ example: '9:30', description: 'Work start time' })
    workStartTime: string;

    @ApiProperty({ example: '18:00', description: 'Work start time' })
    workEndTime: string;

    @ApiProperty({ example: '[1, 2, 3, 4]', description: 'Zone ids' })
    zones: Zone[];
}
