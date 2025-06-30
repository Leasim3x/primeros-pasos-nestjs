import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  // Configuración del TypeORM con el PostgreSQL
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'invitado',
      password: 'pass',
      database: 'crud_nest_usuarios',
      entities: [Usuario],
      synchronize: true,  // Solo para el desarrollo
    }),
    UsuariosModule,
  ],
})
export class AppModule {}
