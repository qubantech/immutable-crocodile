import { ApiProperty } from "@nestjs/swagger";

export class CreateContractorDto {
    @ApiProperty({ example: 'ООО Малина', description: 'Legal entity name' })
    readonly legalEntityName: string;

    @ApiProperty({ example: 'example@email.com', description: 'Contact email' })
    readonly contactEmail: string;

    @ApiProperty({ example: '88005553535', description: 'Contact phone number' })
    readonly contactPhone: string;

    @ApiProperty({ example: '88005553535', description: 'Official phone number' })
    readonly officialPhone: string;

    @ApiProperty({ example: '9:30', description: 'Work start time' })
    readonly workStartTime: string;

    @ApiProperty({ example: '18:00', description: 'Work start time' })
    readonly workEndTime: string;

    @ApiProperty({ example: '[2, 3, 7]', description: 'Zone ids' })
    readonly zones: number[];
}