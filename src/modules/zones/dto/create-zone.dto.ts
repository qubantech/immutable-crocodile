import { ApiProperty } from "@nestjs/swagger";

export class CreateZoneDto {
    @ApiProperty({ example: 'Район А', description: 'Zone name token' })
    readonly nameToken: string;

    @ApiProperty({ example: 'Описание', description: 'Zone description' })
    readonly description: string;

}
