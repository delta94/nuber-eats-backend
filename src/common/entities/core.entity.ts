import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm/index';
import { Field, ID } from '@nestjs/graphql';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id: number;

  @CreateDateColumn()
  @Field(type => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(type => Date)
  updatedAt: Date;
}