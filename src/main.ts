import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const config = new DocumentBuilder()
    .setTitle('Http Based Microservice NestJs')
    .setDescription('The NestJS API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
