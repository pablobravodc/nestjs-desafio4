import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./interfaces/user.interface").User>;
    login(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    findAll(): Promise<import("./interfaces/user.interface").User[]>;
    findOne(id: string): Promise<import("./interfaces/user.interface").User>;
    remove(id: string): string;
}
