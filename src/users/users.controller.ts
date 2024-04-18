import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private appService: UsersService) {}

    @Get('')
    getHello(): string {
      return this.appService.getHello();
    }

    @Post('')
    createUser(@Body() body: any) {
      return body;
    }
}
