import { Sequelize } from "sequelize";
import { ConfigService } from '@nestjs/config';

export class DB {
    sequelize:Sequelize;

    constructor(private configService: ConfigService){
        this.sequelize = new Sequelize(
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

    connect(){
        return this.sequelize;
    }

    close(){
        console.log("CONEXION DATABASE WAS CLOSE")
        this.sequelize.close()
    }

    async query(query:string){
        const response = JSON.parse(JSON.stringify(await this.sequelize.query(query,{})));
        return response;
    }

}
