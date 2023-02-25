import { Test, TestingModule } from '@nestjs/testing';
import { RolQuestionAccessService } from './rol-question-access.service';

describe('RolQuestionAccessService', () => {
  let service: RolQuestionAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolQuestionAccessService],
    }).compile();

    service = module.get<RolQuestionAccessService>(RolQuestionAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
