import { Test, TestingModule } from '@nestjs/testing';
import { RoleQuestionAccessController } from './role-question-access.controller';

describe('RolQuestionAccessController', () => {
  let controller: RoleQuestionAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleQuestionAccessController],
    }).compile();

    controller = module.get<RoleQuestionAccessController>(RoleQuestionAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
