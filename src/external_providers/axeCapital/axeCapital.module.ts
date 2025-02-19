import { Module } from '@nestjs/common';
import { AxeCapitalService } from './axeCapital.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AxeCapitalService],
  exports: [AxeCapitalService],
})
export class AxeCapitalModule {}
