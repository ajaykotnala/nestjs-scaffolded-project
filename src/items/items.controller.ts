import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all items' })
  @ApiResponse({ status: 200, description: 'Return all items.' })
  async findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get item by id' })
  @ApiResponse({ status: 200, description: 'Return the item.' })
  async findOne(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create an item' })
  @ApiResponse({ status: 201, description: 'The item has been created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an item' })
  @ApiResponse({ status: 200, description: 'The item has been updated.' })
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an item' })
  @ApiResponse({ status: 200, description: 'The item has been deleted.' })
  async remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}
