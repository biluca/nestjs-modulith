import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { OrderModule } from '../order/order.module';
import { WeatherModule } from '../weather/weather.module';

@Module({
  imports: [OrderModule, UserModule, WeatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
