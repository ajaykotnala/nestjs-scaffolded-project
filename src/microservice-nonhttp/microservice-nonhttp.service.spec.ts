import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceNonhttpService } from './microservice-nonhttp.service';

describe('MicroserviceNonhttpService', () => {
  let service: MicroserviceNonhttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroserviceNonhttpService],
    }).compile();

    service = module.get<MicroserviceNonhttpService>(MicroserviceNonhttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
