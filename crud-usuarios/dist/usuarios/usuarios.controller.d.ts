import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(data: Partial<Usuario>): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario | null>;
    update(id: string, data: Partial<Usuario>): Promise<Usuario | null>;
    remove(id: string): Promise<{
        eliminado: boolean;
    }>;
}
