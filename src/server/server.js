"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var app = new koa_1["default"]();
var router = new koa_router_1["default"]();
router.get('/', function (ctx, next) {
    ctx.body = ("<html>\n            <head>\n                <title>Hello</title>\n            </head>\n            <body>\n                <h1>First Lesson</h1>\n            </body>\n        </html>");
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(4321);
