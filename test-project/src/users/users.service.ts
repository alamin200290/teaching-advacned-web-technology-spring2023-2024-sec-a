import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  // private users = [
  //   {
  //     id: 1,
  //     name: 'alamin',
  //     email: 'alain@aiub.edu',
  //     password: 'xyz',
  //   },
  //   {
  //     id: 2,
  //     name: 'abc',
  //     email: 'abc@aiub.edu',
  //     password: '123',
  //   },
  //   {
  //     id: 3,
  //     name: 'pqr',
  //     email: 'pqr@aiub.edu',
  //     password: 'pqr',
  //   },
  // ];

  async findAll() {
    //return this.users;
    return await this.userRepo.find({});
  }

  async findById(id: number) {
    //return this.users.find((user) => user.id === id);
    return await this.userRepo.find({ where: { id: id } });
  }

  async create(createUserDto: CreateUserDto) {
    // const lastId = [...this.users].sort((a, b) => b.id - a.id);
    // const newUser = {
    //   id: lastId[0].id + 1,
    //   ...createUserDto,
    // };
    // this.users.push(newUser);
    //return newUser;

    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }
}
