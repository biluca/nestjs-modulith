import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductProviderService {
  integrate() {
    return 'This is the ProductProvider Service! Integrating with a Third Party API';
  }
}
