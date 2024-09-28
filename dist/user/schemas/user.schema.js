"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    roles: { type: String, required: true, default: 'client' },
    phone: String,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=user.schema.js.map