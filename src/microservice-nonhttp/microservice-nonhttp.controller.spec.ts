import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceNonhttpController } from './microservice-nonhttp.controller';
import { MicroserviceNonhttpService } from './microservice-nonhttp.service';

describe('MicroserviceNonhttpController', () => {
  let controller: MicroserviceNonhttpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceNonhttpController],
      providers: [MicroserviceNonhttpService],
    }).compile();

    controller = module.get<MicroserviceNonhttpController>(MicroserviceNonhttpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
