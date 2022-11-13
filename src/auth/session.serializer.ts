import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: User, done: (err: Error, user: User) => void): any {
    done(null, {
      id: user.id,
      username: user.username,
      password: user.password,
      name: user.name,
    });
  }
  deserializeUser(payload: any, done: (err: Error, payload: string) => void) {
    /*  const user = UsersService. */
    done(null, payload);
  }
}
