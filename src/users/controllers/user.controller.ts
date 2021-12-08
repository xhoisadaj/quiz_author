import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {AuthorEntity} from "../entity/author.entity";
import {UserService} from "../services/user.service";

export class UserController {
    public static getUsers = async (request: Request, response: Response) => {
        try {
            const users = await UserService.getUsers();
            return response.send({ users })
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertUser = async (request: Request, response: Response) => {
        try {
            const user = await UserService.insertUser(request);
            return response.status(200).send({ message: 'Success', user });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static updateUser = async (request: Request, response: Response) => {
        const userId = +request.params.userId;

        try {
            if (!userId) {
                return response.send({ status: 400, message: 'userId is not provided'});
            } else {
                const repository = getRepository(AuthorEntity);
                const user = await repository.findOne({ id: userId });
                if (!user) {
                    return response.send({ status: 404, message: `User with id ${userId} not found`});
                } else {
                    const savedRes = await repository.merge(user, request.body);
                    await repository.save(savedRes);
                    return response.send({ status: 200, message: `User with id ${userId} saved successfully`});
                }
            }
        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static deleteUser = async (request: Request, response: Response) => {
        try {
            const userId = +request.params.userId;
            const repository = getRepository(AuthorEntity);

            await repository.delete({ id: userId })
            return response.send({ status: 200, message: 'Success'})
        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static updateUsername = async (request: Request, response: Response) => {
        try {
            const userId = +request.params.userId;
            const authorName = request.body.author_name;

            if (!userId) {
                return response.send({ status: 400, message: 'userId is not provided'});
            } else {
                const repository = getRepository(AuthorEntity);
                const user = await repository.findOne({ id: userId });
                if (!user) {
                    return response.send({ status: 404, message: `User with id ${userId} not found`});
                } else {
                     user.author_name = authorName;
                    await repository.save(user);
                    return response.send({ status: 200, message: `User with id ${userId} saved successfully`});
                }
            }

        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }
}
