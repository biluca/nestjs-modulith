import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  foo() {
    return 'This is the Product Service! Returning a list of product prices';
  }
}
