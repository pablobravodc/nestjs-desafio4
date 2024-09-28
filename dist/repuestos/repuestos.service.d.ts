/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model } from 'mongoose';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { Repuesto } from './interfaces/repuesto.interface';
export declare class RepuestosService {
    private readonly repuestoModel;
    constructor(repuestoModel: Model<Repuesto>);
    create(createRepuestoDto: CreateRepuestoDto): Promise<Repuesto>;
    findAll(): Promise<Repuesto[]>;
    findOne(id: string): Promise<Repuesto>;
    update(id: string, createRepuestoDto: CreateRepuestoDto): Promise<Repuesto>;
    remove(id: string): Promise<void>;
}
