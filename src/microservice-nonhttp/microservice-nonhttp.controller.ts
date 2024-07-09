import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MicroserviceNonhttpService } from './microservice-nonhttp.service';
import { CreateMicroserviceNonhttpDto } from './dto/create-microservice-nonhttp.dto';
import { UpdateMicroserviceNonhttpDto } from './dto/update-microservice-nonhttp.dto';

@Controller()
export class MicroserviceNonhttpController {
  constructor(private readonly microserviceNonhttpService: MicroserviceNonhttpService) {}

  @MessagePattern('createMicroserviceNonhttp')
  create(@Payload() createMicroserviceNonhttpDto: CreateMicroserviceNonhttpDto) {
    return this.microserviceNonhttpService.create(createMicroserviceNonhttpDto);
  }

  @MessagePattern('findAllMicroserviceNonhttp')
  findAll() {
    return this.microserviceNonhttpService.findAll();
  }

  @MessagePattern('findOneMicroserviceNonhttp')
  findOne(@Payload() id: number) {
    return this.microserviceNonhttpService.findOne(id);
  }

  @MessagePattern('updateMicroserviceNonhttp')
  update(@Payload() updateMicroserviceNonhttpDto: UpdateMicroserviceNonhttpDto) {
    return this.microserviceNonhttpService.update(updateMicroserviceNonhttpDto.id, updateMicroserviceNonhttpDto);
  }

  @MessagePattern('removeMicroserviceNonhttp')
  remove(@Payload() id: number) {
    return this.microserviceNonhttpService.remove(id);
  }
}
