"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var user_controller_1 = require("./controllers/user.controller");
var validate_middleware_1 = require("./middlewares/validate.middleware");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
    }
    UserRouter.configRoutes = function (app) {
        app.get('/users', [user_controller_1.UserController.getUsers]);
        app.post('/users', [validate_middleware_1.ValidateMiddleware.validateInput, user_controller_1.UserController.insertUser]);
        app.patch('/users/:userId', [user_controller_1.UserController.updateUsername]);
        app.put('/users/:userId', [user_controller_1.UserController.updateUser]);
        app.delete('/users/:userId', [user_controller_1.UserController.deleteUser]);
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.router.js.map