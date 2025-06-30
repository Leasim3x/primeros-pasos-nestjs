import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];

  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevoUsuario = {
      id: this.usuarios.length + 1,
      ...createUsuarioDto,
    };
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  findAll() {
    return this.usuarios;
  }

  obtenerActivos(){
    return this.usuarios.filter(u => u.activo);
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index === -1) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }

    this.usuarios[index] = {
      ...this.usuarios[index],
      ...updateUsuarioDto, // Sobreescribimos solo los campos enviados
    };

    return this.usuarios[index];
  }

  remove(id: number) {
    const index = this.usuarios.findIndex(u => u.id === id);

    if(index === -1) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }

    const usuarioEliminado = this.usuarios.splice(index, 1); // Elimina 1 registro

    return {
      mensaje: 'Usuario eliminado correctamente',
      usuario: usuarioEliminado[0],
    };
  }
}
