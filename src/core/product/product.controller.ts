import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get("endpoint")
    foo() {
        return this.productService.foo();
    }


}
