import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientService,
    private jwtService: JwtService,
  ) { }

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    console.log('EMIL', email, 'PASS', pass);
    const user = await this.clientService.findOneByEmail(email);
    console.log('USER>', user);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, name: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    name: string,
    email: string,
    pass: string,
    licensePlate: string,
  ): Promise<{ access_token: string }> {
    // TODO: pro tebe, oveř že user neexistuje pod timto emailem
    //if(email already exissts)
    // return {error: 'email already exists'}
    //}
    const user = await this.clientService.create(
      name,
      email, //timto
      pass,
      licensePlate,
    );
    const payload = { userId: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

