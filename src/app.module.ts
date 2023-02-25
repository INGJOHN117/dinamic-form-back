import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleQuestionAccessService } from './services/role-question-access.service';
import { RoleQuestionAccessController } from './controllers/role-question-access.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '../config/configuration'; // this is new


@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [configuration],
   }),
  ],
  controllers: [
    AppController,
    RoleQuestionAccessController
  ],
  providers: [
    AppService,
    RoleQuestionAccessService,
  ],
})
export class AppModule {}
