import { Module } from '@nestjs/common';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { OrderModule } from '../order/order.module';
import { WeatherModule } from '../weather/weather.module';

@Module({
  imports: [OrderModule, ProductModule, UserModule, WeatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
