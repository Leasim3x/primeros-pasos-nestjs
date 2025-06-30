"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    usuarios = [];
    create(createUsuarioDto) {
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
    obtenerActivos() {
        return this.usuarios.filter(u => u.activo);
    }
    findOne(id) {
        return `This action returns a #${id} usuario`;
    }
    update(id, updateUsuarioDto) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) {
            throw new Error(`Usuario con ID ${id} no encontrado`);
        }
        this.usuarios[index] = {
            ...this.usuarios[index],
            ...updateUsuarioDto,
        };
        return this.usuarios[index];
    }
    remove(id) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) {
            throw new Error(`Usuario con ID ${id} no encontrado`);
        }
        const usuarioEliminado = this.usuarios.splice(index, 1);
        return {
            mensaje: 'Usuario eliminado correctamente',
            usuario: usuarioEliminado[0],
        };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map