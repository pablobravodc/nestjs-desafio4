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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        try {
            const encriptedPassword = await bcrypt.hash(createUserDto.password, 10);
            const newUser = new this.userModel({
                ...createUserDto,
                password: encriptedPassword,
            });
            return await newUser.save();
        }
        catch (error) {
            throw new common_1.HttpException('Datos incorrecto', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
    async loginUser(email, password) {
        try {
            const user = await this.userModel.findOne({ email });
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new common_1.HttpException('Contrasena incorrecta', common_1.HttpStatus.NOT_ACCEPTABLE);
            }
            if (user && isPasswordValid) {
                const payload = {
                    sub: user._id,
                    email: user.email,
                    name: user.name,
                    roles: user.roles,
                };
                return { access_token: await this.jwtService.signAsync(payload) };
            }
        }
        catch (error) {
            throw new common_1.HttpException('Datos no encontrados o incorrectos', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        const repuesto = await this.userModel.findById(id).exec();
        if (!repuesto) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return repuesto;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map