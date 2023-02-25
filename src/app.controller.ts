import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { Conection } from '../util/db-conection';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private configService: ConfigService) {}

  @Get()
  getHello(): string {
    console.log('____________________________')
    this.databaseConection();
    console.log('____________________________')
    return this.appService.getHello();
  }


  async databaseConection(){
    try {
      const db = new Conection(this.configService);
      await db.newConection().authenticate();
    } catch (error) {
      throw new Error(error);
    }
  }
}
