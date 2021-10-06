import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query, @Param('id') id, @Param('url') url) {
    console.log(query.perPage, query.page);
    console.log(id, url);
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
