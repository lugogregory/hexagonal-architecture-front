import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductRepository } from '../domain/product.repository';
import { Product, ProductList, ProductRequest } from '../domain/product.model';

import product_list_mock from '../../services/mocks/product-list.mock.json';
import product_detail_mock from '../../services/mocks/product-detail.mock.json';

@Injectable({ providedIn: 'root' })
export class ProductMockImplRepository extends ProductRepository {
  constructor() {
    super();
  }

  getProductList(): Observable<ProductList> {
    return of(product_list_mock);
  }

  getProductDetailById(
    req: Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>
  ): Observable<Product> {
    return of(product_detail_mock);
  }

  addProduct(
    req: Required<Pick<ProductRequest, 'body'>> & Omit<ProductRequest, 'body'>
  ): Observable<Product> {
    throw new Error('Method not implemented.');
  }

  updateProduct(req: Required<ProductRequest>): Observable<Product> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(
    req: Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>
  ): Observable<Product> {
    throw new Error('Method not implemented.');
  }
}
