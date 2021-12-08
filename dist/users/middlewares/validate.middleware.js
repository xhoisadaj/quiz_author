"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMiddleware = void 0;
var Joi = require("joi");
var ValidateMiddleware = /** @class */ (function () {
    function ValidateMiddleware() {
    }
    ValidateMiddleware.validateInput = function (request, response, next) {
        var schema = Joi.object({
            author_name: Joi.string().min(6).max(12).required(),
            author_surname: Joi.string().required(),
            age: Joi.number().required(),
            genre: Joi.string().required(),
            number_of_books: Joi.number().required(),
            birthplace: Joi.string().required(),
        });
        var result = schema.validate(request.body, { abortEarly: true });
        if (typeof result.error === 'undefined') {
            next();
        }
        else {
            return response.send({ status: 400, message: result.error });
        }
    };
    return ValidateMiddleware;
}());
exports.ValidateMiddleware = ValidateMiddleware;
//# sourceMappingURL=validate.middleware.js.map