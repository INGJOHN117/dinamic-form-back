import { Test, TestingModule } from '@nestjs/testing';
import { RolQuestionAccessController } from './rol-question-access.controller';

describe('RolQuestionAccessController', () => {
  let controller: RolQuestionAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolQuestionAccessController],
    }).compile();

    controller = module.get<RolQuestionAccessController>(RolQuestionAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
