import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthService {
  constructor(
    private sessionService: SessionService,
    private jwtService: JwtService, //private readonly encryptionService: EncryptionService,
  ) {}

  // async validateUser(email: string, password: string): Promise<any> {
  //   const session = await this.sessionService.findById()
  //   const user = await this.usersService.findByEmail(email);
  //   const comparison = this.encryptionService.compare(
  //     password,
  //     (user as Record<string, any>).password,
  //   );
  //   if (user && comparison) {
  //     return user;
  //   }
  //   return null;
  // }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  async createToken(): Promise<any> {
    const session = await this.sessionService.create();
    return {
      access_token: this.jwtService.sign({
        id: session.id,
      }),
    };
  }
}
