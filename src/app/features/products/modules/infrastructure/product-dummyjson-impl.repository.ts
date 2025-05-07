import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepository } from '../domain/product.repository';
import { Product, ProductList, ProductRequest } from '../domain/product.model';
import { BaseReq } from '@app/core/models/app-config.model';
import { ConfigService } from '@app/core/services/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductDummyJsonImplRepository extends ProductRepository {
  private baseReq: BaseReq;
  private http = inject(HttpClient);
  
  constructor(private _configService: ConfigService) {
    super();

    this.baseReq = {
      url: this._configService?.appConfig?.api['dummyjson']?.url,
      endPoint: this._configService?.appConfig?.api['dummyjson']?.methods['products']
    };
  }

  getProductList(): Observable<ProductList> {
    return this.http.get<ProductList>(`${this.baseReq.url}/${this.baseReq.endPoint}`);
  }

  getProductDetailById(
    req: Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>
  ): Observable<Product> {
    return this.http.get<Product>(`${this.baseReq.url}/${this.baseReq.endPoint}/${req.id}`);
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
