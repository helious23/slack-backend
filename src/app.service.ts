import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(): string {
    return process.env.SECREAT;
  }
}
