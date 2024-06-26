import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UsersRepository,
  ) {}

  async create(user: CreateUserDto) {
    const userCreated = await this.repository.create(user);

    return userCreated;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.repository.updateUserById(id, updateUserDto);
  }

  async delete(id: string) {
    return await this.repository.deleteUserById(id);
  }
}