import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 전 부분
    return next.handle().pipe(map(data => (data === undefined ? null : data))); // data 가 undefined 이면 null 로 변환 : JSON은 undefined 를 이해 못하므로
    // 마지막 데이터를 한번 더 가공해주는 역할
  }
}
