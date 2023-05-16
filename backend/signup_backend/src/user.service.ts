import { Inject, Injectable } from '@nestjs/common';
import { Collection } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly userCollection: Collection,
  ) {}

  async addUser(username: string, password: string, email: string) {
    const result = await this.userCollection.insertOne({
      username,
      password,
      email,
    });
    
  }

  async getAllUsers() {
    const users = await this.userCollection.find().toArray();
    return users;
  }
}