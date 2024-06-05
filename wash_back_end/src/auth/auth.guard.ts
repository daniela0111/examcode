//check authorization JWT –> allows user to access data
import {
    CanActivate, //Interface for guard logic to determine access permission
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express'; //accessing the request object
import { Module } from '@nestjs/common';
import { ClientModule } from 'src/client/client.module';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';
  //import { AuthGuard } from '@nestjs/passport';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/app.module';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService, //for JWT verification
    private reflector: Reflector, //for accessing route metadata
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request); //retrieve the authorization token from the request header
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      // We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

@Module({
  imports: [ClientModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}