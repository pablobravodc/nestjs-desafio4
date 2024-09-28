import { RepuestosService } from './repuestos.service';
import { CreateRepuestoDto } from './dto/create-repuesto.dto';
import { Repuesto } from './interfaces/repuesto.interface';
export declare class RepuestosController {
    private readonly repuestosService;
    constructor(repuestosService: RepuestosService);
    create(createRepuestoDto: CreateRepuestoDto): Promise<Repuesto>;
    findAll(): Promise<Repuesto[]>;
    findOne(id: string): Promise<Repuesto>;
    update(id: string, createRepuestoDto: CreateRepuestoDto): Promise<Repuesto>;
    remove(id: string): Promise<void>;
}
