import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantsResolver {
  @Query(returns => String)
  hello() {
    return 'Test';
  }
}
