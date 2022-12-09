import { Injectable } from '@nestjs/common';
import { MyLib } from 'lib';

@Injectable()
export class AppService {
  getHello(): string {
    const mylib: MyLib = new MyLib();
    return 'Test: ' + mylib.hello();
  }
}
