import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  let  configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
