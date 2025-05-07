import { UseCase } from '@app/core/models/use-case.model';
import { Observable } from 'rxjs';
import { ProductList } from '../domain/product.model';
import { ProductRepository } from '../domain/product.repository';

export class ProductGetListUseCase implements UseCase<null, Observable<ProductList>> {
  constructor(private productRepository: ProductRepository) {}

  execute(): Observable<ProductList> {
    return this.productRepository.getProductList();
  }
}
