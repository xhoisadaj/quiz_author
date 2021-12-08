import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";

// tslint:disable:variable-name
@Entity("author")
export class AuthorEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("varchar", {
        name: "author_name",
        nullable: true,
    })
    public author_name: string | null;

    @Column("varchar", {
        length: 256,
        name: "author_surname",
        nullable: false,
    })
    public author_surname: string;

    @Column("int", {
        name: "age",
        nullable: false,
    })
    public age: number;

    @Column("varchar", {
        length: 256,
        name: "genre",
        nullable: false,
    })
    public genre: string;

    @Column("int", {
        name: "number_of_books",
        nullable: true,
    })
    public number_of_books: number;

    @Column("varchar", {
        length: 256,
        name: "birthplace",
        nullable: false,
    })
    public birthplace: string;

}