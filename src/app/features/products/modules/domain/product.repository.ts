import { Observable } from 'rxjs';
import { Product, ProductList, ProductRequest } from './product.model';

export abstract class ProductRepository {
  abstract getProductList(): Observable<ProductList>;
  abstract getProductDetailById(req: Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>): Observable<Product>;
  abstract addProduct(req: Required<Pick<ProductRequest, 'body'>> & Omit<ProductRequest, 'body'>): Observable<Product>;
  abstract updateProduct(req: Required<ProductRequest>): Observable<Product>;
  abstract deleteProduct(req: Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>): Observable<Product>;
}
