import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  createUser(@Body() body: UserDto) {
    return this.authService.createUser(body);
  }

  @Post('login')
  login(@Body() body: UserDto) {
    return this.authService.login(body);
  }
}
