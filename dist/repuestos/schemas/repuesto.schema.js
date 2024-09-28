"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepuestoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RepuestoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    anio: { type: Number, required: false },
    precio: { type: Number, required: true },
    foto: { type: String, required: false },
});
//# sourceMappingURL=repuesto.schema.js.map