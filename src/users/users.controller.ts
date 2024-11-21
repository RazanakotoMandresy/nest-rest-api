import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get() //Get /users or get with some query
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }
  @Get(':id') // Get /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    // +id convert the id into number type it's called unary
    return this.userService.findOne(id);
  }
  @Post() // Post /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'ADMIN' | 'ENGINNEER' | 'INTERN';
    },
  ) {
    return this.userService.create(user);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUser: {
      name?: string;
      email?: string;
      role?: 'ADMIN' | 'ENGINNEER' | 'INTERN';
    },
  ) {
    return this.userService.update(id, updateUser);
  }
  @Delete(':id')
  deleteOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.delete(+id);
  }
}
