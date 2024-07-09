import { Module } from '@nestjs/common';
import { MicroserviceNonhttpService } from './microservice-nonhttp.service';
import { MicroserviceNonhttpController } from './microservice-nonhttp.controller';

@Module({
  controllers: [MicroserviceNonhttpController],
  providers: [MicroserviceNonhttpService],
})
export class MicroserviceNonhttpModule {}
