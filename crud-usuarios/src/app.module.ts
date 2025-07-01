import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  // Configuración del TypeORM con el PostgreSQL
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carga el .env

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbUrl = config.get<string>('DATABASE_URL');
        console.log('📦 DATABASE_URL:', dbUrl); // <--- Agrega esto
        return {
          type: 'postgres',
          url: dbUrl,
          autoLoadEntities: true,
          ssl: { rejectUnauthorized: false },
          synchronize: true,
        };
      },
    }),
    UsuariosModule,
  ]
})

export class AppModule { }
