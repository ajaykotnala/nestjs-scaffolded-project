import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [
    CacheModule.register({
      ttl: 5, // cache time to live in seconds
      max: 10, // maximum number of items in cache
    }),
  ],
})
export class ItemsModule {}
