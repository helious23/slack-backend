import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace() {}

  @Get(':url/members')
  getAllMemebersFromWorkspace() {}

  @Post(':url/members')
  invitemembersToWorkspace() {}

  @Delete(':url/members/:id')
  kickmemberFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkSpace() {}

  @Get(':url/users/:id')
  DEPRECATED_getMemberInfoInWorkSpace() {
    this.getMemberInfoInWorkSpace();
  }
}
