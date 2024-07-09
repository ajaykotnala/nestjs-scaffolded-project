import { Injectable } from '@nestjs/common';
import { CreateMicroserviceNonhttpDto } from './dto/create-microservice-nonhttp.dto';
import { UpdateMicroserviceNonhttpDto } from './dto/update-microservice-nonhttp.dto';

@Injectable()
export class MicroserviceNonhttpService {
  create(createMicroserviceNonhttpDto: CreateMicroserviceNonhttpDto) {
    return 'This action adds a new microserviceNonhttp';
  }

  findAll() {
    return `This action returns all microserviceNonhttp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} microserviceNonhttp`;
  }

  update(id: number, updateMicroserviceNonhttpDto: UpdateMicroserviceNonhttpDto) {
    return `This action updates a #${id} microserviceNonhttp`;
  }

  remove(id: number) {
    return `This action removes a #${id} microserviceNonhttp`;
  }
}
