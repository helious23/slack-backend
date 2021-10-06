import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP'); // context 추가 : 어떤 부분인지 Logger 에서 알수 있음. Logger.log 사용 추천

  use(req: Request, res: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || ''; // header 에서 가져옴

    res.on('finish', () => {
      // router 보다 먼저 실행 후 이후 logger print 해야 되므로 비동기 실행을 위해 res.on 사용
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}
