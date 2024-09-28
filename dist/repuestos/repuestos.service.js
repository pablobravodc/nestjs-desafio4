"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepuestosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RepuestosService = class RepuestosService {
    constructor(repuestoModel) {
        this.repuestoModel = repuestoModel;
    }
    async create(createRepuestoDto) {
        const newRepuesto = new this.repuestoModel(createRepuestoDto);
        return newRepuesto.save();
    }
    async findAll() {
        return this.repuestoModel.find().exec();
    }
    async findOne(id) {
        const repuesto = await this.repuestoModel.findById(id).exec();
        if (!repuesto) {
            throw new common_1.NotFoundException(`Repuesto con ID ${id} no encontrado`);
        }
        return repuesto;
    }
    async update(id, createRepuestoDto) {
        const updatedRepuesto = await this.repuestoModel.findByIdAndUpdate(id, createRepuestoDto, { new: true }).exec();
        if (!updatedRepuesto) {
            throw new common_1.NotFoundException(`Repuesto con ID ${id} no encontrado`);
        }
        return updatedRepuesto;
    }
    async remove(id) {
        const result = await this.repuestoModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Repuesto con ID ${id} no encontrado`);
        }
    }
};
exports.RepuestosService = RepuestosService;
exports.RepuestosService = RepuestosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Repuesto')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RepuestosService);
//# sourceMappingURL=repuestos.service.js.map