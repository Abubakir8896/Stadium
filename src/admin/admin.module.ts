import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {JwtModule} from '@nestjs/jwt'
import { MailModule } from './../mail/mail.module';
import { AdminsService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './models/admin.model';

@Module({
  imports:[SequelizeModule.forFeature([Admin]), 
  JwtModule.register({}),MailModule],
  controllers: [AdminController],
  providers: [AdminsService],
})
export class AdminModule {}
