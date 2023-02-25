import { CreateRoleQuestionAccessDto, UpdateRoleQuestionAccessDto } from './../dtos/role-question-access.dtos';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleQuestionAccess } from 'src/entities/role-question-access.entity';

@Injectable()
export class RolQuestionAccessService {
    private counterId = 1;
    private array_access:RoleQuestionAccess[] = [{
        id:1,
        id_role:1,
        id_question:1,
        visible:'visible',
        editable:'editable',
        require:'require',
    }];

    findAll(){
        return this.array_access;
    }

    findOne(id:number){
        const user = this.array_access.find(item => item.id === id);
        if(!user){ 
            throw new NotFoundException(`user with id ${id} not found`);
        }
        return user;
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
