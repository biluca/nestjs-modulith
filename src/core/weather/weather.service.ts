import { Injectable } from '@nestjs/common';
import { OpenWeatherService } from 'src/external_providers/openWeather/openWeather.service';

@Injectable()
export class WeatherService {

  constructor(private readonly openWeatherService: OpenWeatherService) {}

  foo() {
    const response = 'This is the Weather Service! '
    .concat(' \n ')
    .concat(this.openWeatherService.integrate())

    return response
  }
}
