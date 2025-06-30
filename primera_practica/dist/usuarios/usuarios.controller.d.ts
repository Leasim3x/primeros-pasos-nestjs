import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): {
        nombre: string;
        email: string;
        activo: boolean;
        id: number;
    };
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): import("./entities/usuario.entity").Usuario;
    findAll(): import("./entities/usuario.entity").Usuario[];
    obtenerActivos(): import("./entities/usuario.entity").Usuario[];
    findOne(id: string): string;
    remove(id: string): {
        mensaje: string;
        usuario: import("./entities/usuario.entity").Usuario;
    };
}
