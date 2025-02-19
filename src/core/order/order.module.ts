import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { AxeCapitalModule } from 'src/external_providers/axeCapital/axeCapital.module';
import { ProductProviderModule } from 'src/external_providers/productProvider/productProvider.module';

@Module({
  imports: [AxeCapitalModule, ProductProviderModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
