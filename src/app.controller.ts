import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AppService } from './app.service';
import {
  ClientKafka,
  EventPattern,
  Client,
  MessagePattern,
} from '@nestjs/microservices';
import { microserviceConfig } from './microserviceConfig';
import { UpdateProductDto } from './product/dto/update-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
