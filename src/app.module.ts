import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { GraphQlCodeFirstModule } from './graph-ql-code-first/graph-ql-code-first.module';
import { GraphQlSchemaFirstModule } from './graph-ql-schema-first/graph-ql-schema-first.module';
import { MicroserviceNonhttpModule } from './microservice-nonhttp/microservice-nonhttp.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [CacheModule.register({
    ttl: 5, // cache time to live in seconds
    max: 10, // maximum number of items in cache
  }),ItemsModule, GraphQlCodeFirstModule, GraphQlSchemaFirstModule, MicroserviceNonhttpModule, WebsocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
