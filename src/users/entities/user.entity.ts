import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';
import { ObjectType } from '@nestjs/graphql';
import { CoreEntity } from '../../common/entities/core.entity';

type UserRole = 'client' | 'owner' | 'delivery'

@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;
}