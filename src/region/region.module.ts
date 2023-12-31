import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RegionController } from './region.controller';
import { Region } from './models/region.model';

@Module({
  imports:[SequelizeModule.forFeature([Region])], 
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
