import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/index';
import { CreateAccountInput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {
  }

  async createAccount({ email, password, role }: CreateAccountInput) {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        // make Error
        return;
      }
      await this.users.save(this.users.create({ email, password, role }));
      return true;
    } catch (e) {
      return;
    }
    // check new user
    // create user & hash the password}
  }
}
