import { ConfigService } from '@nestjs/config';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DB } from '../../util/db-conection'
import { Sequelize } from 'sequelize';

import { CreateRoleQuestionAccessDto, UpdateRoleQuestionAccessDto } from '../dtos/role-question-access.dtos';
import { RoleQuestionAccess } from 'src/entities/role-question-access.entity';

@Injectable()
export class RoleQuestionAccessService {
    private array_access:RoleQuestionAccess[] = [];
    db:Sequelize;

    constructor(private configService:ConfigService){
        try {
            const instan_db = new DB(this.configService);
            this.db = instan_db.connect();
            this.db.authenticate();
          } catch (error) {
            throw new Error(error);
          }
    }

    async getAllData(){
        this.array_access = [];
        (await this.db.query('SELECT * FROM tbl_role_question_access'))[0].forEach( (row:RoleQuestionAccess) => {
            this.array_access.push(row);
        });
        return this.array_access;
    }

    findOne(id:number){
        const question = this.array_access.find(item => item.id === id);
        if(!question){ 
            throw new NotFoundException(`user with id ${id} not found`);
        }
        return question;
    }
    
    // create(payload:CreateRoleQuestionAccessDto){
    //     console.log(payload)
    //     this.counterId++;
    //     const newUser = {
    //         id: this.counterId,
    //         ...payload,
    //     }
    //     this.array_access.push(newUser);
    //     return newUser; 
    // }

    // update(id:number, payload:UpdateRoleQuestionAccessDto){
    //     const user = this.findOne(id);
    //     if(user){
    //         const index = this.array_access.findIndex(item => item.id === id);
    //         this.array_access[index] = {...user,...payload};
    //         return  this.array_access[index];
    //     }
    //     return null;
    // }

    // delete(id:number) {
    //     const user = this.findOne(id);
    //     const index = this.array_access.findIndex(item => item.id === id)
    //     return this.array_access.splice(index, 1);
    // }
}
