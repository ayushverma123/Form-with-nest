import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        await client.connect();
       
        const db = client.db('mydb');
        return db.collection('users');
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
