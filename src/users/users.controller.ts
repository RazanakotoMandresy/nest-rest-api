import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get /users or get with some query
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }
  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post() // Post /users
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: {}) {
    return { id, ...updateUser };
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return { id };
  }
}
