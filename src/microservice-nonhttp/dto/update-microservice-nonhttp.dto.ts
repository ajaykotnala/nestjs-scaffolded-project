import { PartialType } from '@nestjs/mapped-types';
import { CreateMicroserviceNonhttpDto } from './create-microservice-nonhttp.dto';

export class UpdateMicroserviceNonhttpDto extends PartialType(CreateMicroserviceNonhttpDto) {
  id: number;
}
