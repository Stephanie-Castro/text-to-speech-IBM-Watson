import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInfoTextAudio1619799524615 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "info_text_audio",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"  
                    },
                    {
                        name: "text_value",
                        type: "varchar"  
                    },
                    {
                        name: "file_name",
                        type: "varchar"  
                    },
                    {
                        name: "file_path",
                        type: "varchar"  
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("info_text_audio");
    }

}
