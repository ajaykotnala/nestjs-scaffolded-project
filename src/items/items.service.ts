import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CreateItemDto, UpdateItemDto } from './dto';

@Injectable()
export class ItemsService {
  private items = [];

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async findAll() {
    const cachedItems = await this.cacheManager.get('items');
    if (cachedItems) {
      return cachedItems;
    }
    await this.cacheManager.set('items', this.items, 5);
    return this.items;
  }

  async findOne(id: string) {
    const cachedItem = await this.cacheManager.get(`item-${id}`);
    if (cachedItem) {
      return cachedItem;
    }
    const item = this.items.find(item => item.id === id);
    if (!item) {
      throw new NotFoundException(`Item with ID "${id}" not found`);
    }
    await this.cacheManager.set(`item-${id}`, item, 5);
    return item;
  }

  create(createItemDto: CreateItemDto) {
    const newItem = { id: Date.now().toString(), ...createItemDto };
    this.items.push(newItem);
    this.cacheManager.del('items'); // clear the cache for the items list
    return newItem;
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Item with ID "${id}" not found`);
    }
    this.items[index] = { ...this.items[index], ...updateItemDto };
    this.cacheManager.del('items'); // clear the cache for the items list
    this.cacheManager.del(`item-${id}`); // clear the cache for the updated item
    return this.items[index];
  }

  remove(id: string) {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Item with ID "${id}" not found`);
    }
    const deletedItem = this.items.splice(index, 1);
    this.cacheManager.del('items'); // clear the cache for the items list
    this.cacheManager.del(`item-${id}`); // clear the cache for the deleted item
    return deletedItem;
  }
}
