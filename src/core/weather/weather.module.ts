import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { OpenWeatherModule } from 'src/external_providers/openWeather/openWeather.module';

@Module({
  imports: [OpenWeatherModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
