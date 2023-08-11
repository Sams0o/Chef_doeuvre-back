import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DestinationsModule } from './destinations/destinations.module';
import { User } from './users/entities/user.entity';
import { Destination } from './destinations/entities/destination.entity';

dotenv.config({
  path: '.env'
})

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    entities: [User, Destination],
    synchronize: false,
    dropSchema: false
  }), UsersModule, DestinationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
