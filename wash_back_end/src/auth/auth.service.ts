import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  jwtService: any;
  constructor(
    private clientService: ClientService,
    privatejwtService: JwtService
    ) {}

  async signIn(
    name: string, 
    pass: string,
    ): Promise<{access_token: string }> {
    const user = await this.clientService.findOne(name);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: client.clientId, name: this.clientService.name};
    return {
        access_token: await this.jwtService.signAsync(payload),
  };
}}
