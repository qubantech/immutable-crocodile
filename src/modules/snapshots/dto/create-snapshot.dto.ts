import { ApiProperty } from "@nestjs/swagger";

export class CreateSnapshotDto {
    @ApiProperty({ example: '18:34:12', description: 'Snapshot timestamp' })
    time: string;

    @ApiProperty({ example: 'www.objectstorage.com/imageid', description: 'Image fragment url' })
    imageUrl: string;

    @ApiProperty({ example: '[1, 2, 2, 2, 3]', description: 'Object class ids' })
    objectClassIds: number[];

    @ApiProperty({ example: '228', description: 'Event id' })
    eventId: number;
}
