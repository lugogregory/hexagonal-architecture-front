import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductRepository } from '../modules/domain/product.repository';
import { ProductGetListUseCase } from '../modules/application/get-product-list.usecase';
import { ProductGetDetailUseCase } from '../modules/application/get-product-detail.usecase';
import { Product, ProductList, ProductRequest } from '../modules/domain/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService extends ProductRepository {
  constructor(
    private productGetListUseCase: ProductGetListUseCase,
    private productGetDetailUseCase: ProductGetDetailUseCase
  ) {
    super();
  }

  getProductList(): Observable<ProductList> {
    return this.productGetListUseCase.execute();
  }

  getProductDetailById(
    req: Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>
  ): Observable<Product> {
    return this.productGetDetailUseCase.execute(req);
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
