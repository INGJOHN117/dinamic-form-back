import { Test, TestingModule } from '@nestjs/testing';
import { RoleQuestionAccessService } from './role-question-access.service';

describe('RolQuestionAccessService', () => {
  let service: RoleQuestionAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleQuestionAccessService],
    }).compile();

    service = module.get<RoleQuestionAccessService>(RoleQuestionAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
