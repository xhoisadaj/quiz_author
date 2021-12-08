import {getRepository} from "typeorm";
import {AuthorEntity} from "../entity/author.entity";
import {Request} from "express";

export class UserService {
    public static getUsers = async () => {
        const repository = getRepository(AuthorEntity);
        return await repository.find();
    }

    public static insertUser = async (request: Request) => {
        const repository = getRepository(AuthorEntity);
        const user = repository.create({
            ...request.body
        })

        return await repository.save(user);
    }
}
