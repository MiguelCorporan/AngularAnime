import { TestBed } from '@angular/core/testing';
import { SavesService } from './saves.service';
import { Product } from 'src/interface/product.models';

describe('SavesService', () => {
  let service: SavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to favorites', () => {
    const item: Product = {
      id: '1',
      code: 'abc123',
      name: 'Test Product',
      description: 'A test product',
      image: 'test.jpg',
      price: 50,
      category: 'Test Category',
      quantity: 10,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
    };

    service.FavSave(item);

    expect(service.FavItem).toContain(item);
  });

  it('should remove an item from favorites', () => {
    const item: Product = {
      id: '2',
      code: 'def456',
      name: 'Another Test Product',
      description: 'Another test product',
      image: 'another.jpg',
      price: 60,
      category: 'Test Category',
      quantity: 15,
      inventoryStatus: 'INSTOCK',
      rating: 4.0,
    };

    service.FavSave(item);
    service.removeItem(item);

    expect(service.FavItem).not.toContain(item);
  });

  it('should remove all items from favorites', () => {
    const item1: Product = {
      id: '3',
      code: 'xyz789',
      name: 'Yet Another Test Product',
      description: 'Yet another test product',
      image: 'yetanother.jpg',
      price: 70,
      category: 'Test Category',
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      rating: 3.5,
    };

    const item2: Product = {
      id: '4',
      code: 'ijk123',
      name: 'One More Test Product',
      description: 'One more test product',
      image: 'onemore.jpg',
      price: 80,
      category: 'Test Category',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 4.2,
    };

    service.FavSave(item1);
    service.FavSave(item2);
    service.removeAll();

    expect(service.FavItem.length).toBe(0);
  });
});