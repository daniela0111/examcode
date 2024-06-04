import {
    Controller,
    Body,
    Post,
    HttpCode,
    HttpStatus,
    Request,
    UseGuards,
    Get,
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';
  //import { sign } from 'crypto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.userName, signInDto.password);
    }
  
    @HttpCode(HttpStatus.OK)
    @Post('signup')
    async signUp(@Body() signUpDto: Record<string, any>) {
      return this.authService.signUp(
        signUpDto.userName,
        signUpDto.email,
        signUpDto.password,
        signUpDto.licensePlate,
      );
    }
  
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.name;
    }
  }
