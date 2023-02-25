import { RoleQuestionAccess } from './../entities/role-question-access.entity';
import { RoleQuestionAccessService} from '../services/role-question-access.service';
import { Controller, Get } from '@nestjs/common';


@Controller('role-question-access')
export class RoleQuestionAccessController {

    constructor(private roleQuestionAccessService: RoleQuestionAccessService){}

    @Get()
    test(){
        try {
            return this.roleQuestionAccessService.getAllData();
        } catch (error) {
            throw new Error(error);
        }
    }
    
}
