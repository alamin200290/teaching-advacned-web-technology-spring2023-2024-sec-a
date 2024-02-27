import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'alamin',
      email: 'alain@aiub.edu',
      password: 'xyz',
    },
    {
      id: 2,
      name: 'abc',
      email: 'abc@aiub.edu',
      password: '123',
    },
    {
      id: 3,
      name: 'pqr',
      email: 'pqr@aiub.edu',
      password: 'pqr',
    },
  ];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const lastId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: lastId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
}
