import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenWeatherService {
  integrate() {
    return 'This is the OpenWeather Service! Integrating with a Third Party API';
  }
}
