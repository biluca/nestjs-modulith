import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { AxeCapitalModule } from 'src/external_providers/axeCapital/axeCapital.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [AxeCapitalModule, ProductModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
