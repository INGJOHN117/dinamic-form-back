import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolQuestionAccessService } from './services/rol-question-access.service';
import { RolQuestionAccessController } from './controllers/rol-question-access.controller';
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
    RolQuestionAccessController
  ],
  providers: [
    AppService,
    RolQuestionAccessService,
  ],
})
export class AppModule {}
