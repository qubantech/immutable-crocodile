import { ApiProperty } from "@nestjs/swagger";

export class CreateObjectClassDto {
    @ApiProperty({ example: 'Большой мусор', description: 'Unique category identifier token' })
    readonly nameToken: string;

    @ApiProperty({ example: 'Описание про мусор', description: 'Category description' })
    readonly description: string;
}
