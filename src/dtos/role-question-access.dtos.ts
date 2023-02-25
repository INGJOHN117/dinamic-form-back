import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRoleQuestionAccessDto{
    @IsNumber()
    @IsNotEmpty()
    id_role:number;
    @IsNumber()
    @IsNotEmpty()
    id_question:number;
    @IsString()
    @IsNotEmpty()
    visible:string;
    @IsString()
    @IsNotEmpty()
    editable:string;
    @IsString()
    @IsNotEmpty()
    require:string;
}

export class UpdateRoleQuestionAccessDto extends PartialType(CreateRoleQuestionAccessDto){
    
}


