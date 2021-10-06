import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { JoinRequestDto } from './dtos/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Req() req: Request) {
    return req.user;
  }

  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data);
  }

  @Post('login')
  logIn(@Req() req: Request) {
    return req.user;
  }

  @Post('logout')
  logOut(@Req() req: Request, @Res() res: Response) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
