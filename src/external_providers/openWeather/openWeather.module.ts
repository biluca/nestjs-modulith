import { Module } from '@nestjs/common';
import { OpenWeatherService } from './openWeather.service';

@Module({
  imports: [],
  controllers: [],
  providers: [OpenWeatherService],
  exports: [OpenWeatherService],
})
export class OpenWeatherModule {}
