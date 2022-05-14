import { ApiProperty } from "@nestjs/swagger";
import { Event } from "../../../models/event.model";

export class CreateCameraDto {
    @ApiProperty({ example: 'ул. Пушкина д. Колотушкина', description: 'Address' })
    address: string;

    @ApiProperty({ example: '38.8951', description: 'Latitude' })
    latitude: number;

    @ApiProperty({ example: '-77.0364', description: 'Longitude' })
    longitude: number;

    @ApiProperty({ example: '[1, 2, 4, 9, 12]', description: 'Zone ids' })
    zoneId: number;

    @ApiProperty({ example: '[1, 3, 4]', description: 'Event ids' })
    events: Event[];
}
