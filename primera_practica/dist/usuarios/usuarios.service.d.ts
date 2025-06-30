import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosService {
    private usuarios;
    create(createUsuarioDto: CreateUsuarioDto): {
        nombre: string;
        email: string;
        activo: boolean;
        id: number;
    };
    findAll(): Usuario[];
    obtenerActivos(): Usuario[];
    findOne(id: number): string;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Usuario;
    remove(id: number): {
        mensaje: string;
        usuario: Usuario;
    };
}
