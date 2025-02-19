import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  foo() {
    return 'This is the User Service!';
  }
}
