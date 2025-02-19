import { Injectable } from '@nestjs/common';
import { AxeCapitalService } from 'src/external_providers/axeCapital/axeCapital.service';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderService {
  constructor(private readonly axeCapitalService: AxeCapitalService, private readonly productService: ProductService) { }

  foo() {
    const response = 'This is the Order Service! '
    .concat(' \n ')
    .concat(this.productService.foo())
    .concat(' \n ')
    .concat(this.axeCapitalService.integrate());

    return response;
  }
}
