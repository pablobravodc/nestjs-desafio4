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
exports.RepuestosController = void 0;
const common_1 = require("@nestjs/common");
const repuestos_service_1 = require("./repuestos.service");
const create_repuesto_dto_1 = require("./dto/create-repuesto.dto");
const decorator_1 = require("../decorator");
const rol_enum_1 = require("../rol.enum");
let RepuestosController = class RepuestosController {
    constructor(repuestosService) {
        this.repuestosService = repuestosService;
    }
    async create(createRepuestoDto) {
        return this.repuestosService.create(createRepuestoDto);
    }
    async findAll() {
        return this.repuestosService.findAll();
    }
    async findOne(id) {
        return this.repuestosService.findOne(id);
    }
    async update(id, createRepuestoDto) {
        return this.repuestosService.update(id, createRepuestoDto);
    }
    async remove(id) {
        return this.repuestosService.remove(id);
    }
};
exports.RepuestosController = RepuestosController;
__decorate([
    (0, decorator_1.Roles)(rol_enum_1.Role.Admin),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repuesto_dto_1.CreateRepuestoDto]),
    __metadata("design:returntype", Promise)
], RepuestosController.prototype, "create", null);
__decorate([
    (0, decorator_1.Roles)(rol_enum_1.Role.User, rol_enum_1.Role.Admin),
    (0, common_1.Get)('/lista'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepuestosController.prototype, "findAll", null);
__decorate([
    (0, decorator_1.Roles)(rol_enum_1.Role.Admin),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepuestosController.prototype, "findOne", null);
__decorate([
    (0, decorator_1.Roles)(rol_enum_1.Role.User, rol_enum_1.Role.Admin),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_repuesto_dto_1.CreateRepuestoDto]),
    __metadata("design:returntype", Promise)
], RepuestosController.prototype, "update", null);
__decorate([
    (0, decorator_1.Roles)(rol_enum_1.Role.Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RepuestosController.prototype, "remove", null);
exports.RepuestosController = RepuestosController = __decorate([
    (0, common_1.Controller)('repuestos'),
    __metadata("design:paramtypes", [repuestos_service_1.RepuestosService])
], RepuestosController);
//# sourceMappingURL=repuestos.controller.js.map