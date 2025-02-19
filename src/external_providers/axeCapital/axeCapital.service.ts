import { Injectable } from '@nestjs/common';

@Injectable()
export class AxeCapitalService {
  integrate() {
    return 'This is the AxeCapital Service! Integrating with a Third Party API';
  }
}
