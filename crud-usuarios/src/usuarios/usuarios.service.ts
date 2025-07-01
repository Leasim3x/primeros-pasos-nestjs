import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepo: Repository<Usuario>,
    ){}

    create(data: Partial<Usuario>){
        const usuario = this.usuarioRepo.create(data);
        return this.usuarioRepo.save(usuario);
    }

    findAll(){
        return this.usuarioRepo.find();
    }

    findOne(id: number) {
        return this.usuarioRepo.findOneBy({ id });
    }

    async update(id: number, data: Partial<Usuario>) {
        await this.usuarioRepo.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        const result = await this.usuarioRepo.delete(id);
        return result.affected ? {eliminado: true} : { eliminado: false};
    }
}
