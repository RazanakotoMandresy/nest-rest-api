import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get /users
  findAll() {
    return [];
  }
  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post()
  create(@Body() user: {}) {
    return user;
  }
}
