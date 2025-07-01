import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare class UsuariosService {
    private usuarioRepo;
    constructor(usuarioRepo: Repository<Usuario>);
    create(data: Partial<Usuario>): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario | null>;
    update(id: number, data: Partial<Usuario>): Promise<Usuario | null>;
    remove(id: number): Promise<{
        eliminado: boolean;
    }>;
}
