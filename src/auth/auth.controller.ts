import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBody,
  ApiParam,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'username',
        },
        password: {
          type: 'string',
          example: 'password',
        },
      },
    },
  })
  login(@Request() req): any {
    return req.user;
  }
}
