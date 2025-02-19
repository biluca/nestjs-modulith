import { Injectable } from '@nestjs/common';
import { AxeCapitalService } from 'src/external_providers/axeCapital/axeCapital.service';
import { ProductProviderService } from 'src/external_providers/productProvider/productProvider.service';

@Injectable()
export class OrderService {
  constructor(private readonly axeCapitalService: AxeCapitalService, private readonly productProviderService: ProductProviderService) { }

  foo() {
    const response = 'This is the Order Service! '
    .concat(' \n ')
    .concat(this.productProviderService.integrate())
    .concat(' \n ')
    .concat(this.axeCapitalService.integrate());

    return response;
  }
}
