import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world !! ';
  }

  getGreeting(): string {
    return 'Hey hey Nounou !! welcome here !! ';
  }
}
