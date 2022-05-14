import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
    @ApiProperty({ example: 'www.objectstorage.com/videoid', description: 'Video fragment url' })
    videoUrl: string;

    @ApiProperty({ example: 'Большой мусор', description: 'Event start timestamp' })
    startTime: string;

    @ApiProperty({ example: 'Описание про мусор', description: 'Event end timestamp' })
    endTime: string;

    @ApiProperty({ example: '[1, 23, 42]', description: 'Snapshot ids' })
    snapshots: number[];

    @ApiProperty({ example: '42', description: 'Camera id' })
    camera: number;
}
