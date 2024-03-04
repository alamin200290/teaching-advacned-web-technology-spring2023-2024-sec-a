import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('In side Auth Middleware...');
    next();
  }
}
