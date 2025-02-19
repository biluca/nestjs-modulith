import { Module } from '@nestjs/common';
import { ProductProviderService } from './productProvider.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ProductProviderService],
  exports: [ProductProviderService],
})
export class ProductProviderModule {}
