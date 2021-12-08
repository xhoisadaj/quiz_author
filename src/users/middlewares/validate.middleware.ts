import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';

export class ValidateMiddleware {
    public static validateInput = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            author_name: Joi.string().min(6).max(12).required(),
            author_surname: Joi.string().required(),
            age: Joi.number().required(),
            genre: Joi.string().required(),
            number_of_books: Joi.number().required(),
            birthplace: Joi.string().required(),

        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }
}
