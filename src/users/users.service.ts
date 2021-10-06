import { Injectable } from '@nestjs/common';
import { JoinRequestDto } from './dtos/join.request.dto';

@Injectable()
export class UsersService {
  async postUsers(data: JoinRequestDto): Promise<{ ok: boolean }> {
    return {
      ok: true,
    };
  }
}
