import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1638984460584 implements MigrationInterface {
    name = 'InitialMigration1638984460584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author\` DROP COLUMN \`password\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author\` ADD \`password\` varchar(256) NULL`);
    }

}
