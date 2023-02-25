import { Sequelize } from "sequelize";
import { ConfigService } from '@nestjs/config';

export class Conection {
    constructor(private configService: ConfigService){}

    newConection(){
        console.log(`==========> ${this.configService.get<string>("DATABASE")}`)
        console.log(`==========> ${this.configService.get<string>("DATABASE_USER")}`)
        console.log(`==========> ${this.configService.get<string>("DATABASE_PASSWORD")}`)
        console.log(`==========> ${this.configService.get<string>("DATABASE_URL")}`)
        console.log(`==========> ${this.configService.get<string>("DATABASE_PORT")}`)
        
        return new Sequelize(
            this.configService.get<string>("DATABASE"),
            this.configService.get<string>("DATABASE_USER"),
            this.configService.get<string>("DATABASE_PASSWORD"),
            {
                host:this.configService.get<string>("DATABASE_URL"),
                port:this.configService.get<number>("DATABASE_PORT"),
                dialect:'postgres',
            }
        )

    }

}
