import { UseCase } from '@app/core/models/use-case.model';
import { Observable } from 'rxjs';
import { Product, ProductList, ProductRequest } from '../domain/product.model';
import { ProductRepository } from '../domain/product.repository';

export class ProductGetDetailUseCase
  implements
    UseCase<
      Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>,
      Observable<Product>
    >
{
  constructor(private productRepository: ProductRepository) {}

  execute(
    req: Required<Pick<ProductRequest, 'id'>> & Omit<ProductRequest, 'id'>
  ): Observable<Product> {
    return this.productRepository.getProductDetailById(req);
  }
}
