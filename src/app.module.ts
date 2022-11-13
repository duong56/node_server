import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestMiddleware } from './test.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mollun:duong562001@cluster0.pbe9pg6.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
//  implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(TestMiddleware,).forRoutes('*')
//   }
// }
