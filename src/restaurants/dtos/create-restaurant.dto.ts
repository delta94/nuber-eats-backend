import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

// https://docs.nestjs.com/openapi/mapped-types
// 위 내용은 전부 InputType을 기준으로 사용할 수 있다.
// 하지만 마지막 인자로 InputType을 넣어주면, 기존 ObjectType의 Entity들로도 사용이 가능하다.
// PartialType : 모든 속성을 Optional로 만듬
// OmitType : 모든 속성을 선택한 다음 특정 키 집합을 제거하여 유형을 구성
// PickType : 입력 유형에서 속성 집합을 선택하여 새 유형 (클래스)을 생성
// IntersectionType : 두 유형을 하나의 새로운 유형으로 결합

// 반대로 InputType이 아닌 Type에 @InputType({isAbstract:true})를 위에 달아줘도 된다.
// @InputType({ isAbstract: true })
// @ObjectType()
// @Entity()
// export class Restaurant {

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id'], InputType) {
}