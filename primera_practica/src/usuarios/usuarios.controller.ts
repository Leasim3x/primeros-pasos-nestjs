import { Controller, Get, Post, Put, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios') // Prefijo de la ruta
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post() // Ruta: POST /usuarios
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Put(':id')  // Ruta: PUT /usuarios/:id
  update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(+id, updateUsuarioDto); // Convertimos el id a número
  }

  @Get()  // Ruta: GET /usuarios
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get('activos') // Ruta: GET /usuarios/activos
  obtenerActivos(){
    return this.usuariosService.obtenerActivos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  /**
   @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  } 
   */

  @Delete(':id')  // Ruta: DELETE /usuarios/id
  remove(@Param('id') id: string) {
    const parseId = Number(id);
    if (isNaN(parseId)) {
      throw new BadRequestException('El ID debe ser un número válido');
    }

    return this.usuariosService.remove(parseId);
  }
}
