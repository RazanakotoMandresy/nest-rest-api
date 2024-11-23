import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'name1',
      email: 'mail@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'name2',
      email: 'mail2@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'name3',
      email: 'mail3@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'name4',
      email: 'mail4@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'name5',
      email: 'mail5@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'name6',
      email: 'mail6@gmail.com',
      role: 'ENGINEER',
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }
  create(createUserDto: CreateUserDto) {
    // > [11,2,22,1].sort((a, b) => a - b)
    // [ 1, 2, 11, 22 ]
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, updatedUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
