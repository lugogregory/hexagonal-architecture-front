import { Provider } from '@angular/core';

import { ProductRepository } from '../modules/domain/product.repository';
import { ProductGetListUseCase } from '../modules/application/get-product-list.usecase';
import { ProductGetDetailUseCase } from '../modules/application/get-product-detail.usecase';

const productGetListUseCaseFactory: (productRepository: ProductRepository) => ProductGetListUseCase = (
    productRepository: ProductRepository
) => new ProductGetListUseCase(productRepository);
export const productGetListUseCaseProvider: Provider = {
  provide: ProductGetListUseCase,
  useFactory: productGetListUseCaseFactory,
  deps: [ProductRepository]
};

const productGetDetailUseCaseFactory: (productRepository: ProductRepository) => ProductGetDetailUseCase = (
    productRepository: ProductRepository
) => new ProductGetDetailUseCase(productRepository);
export const productGetDetailUseCaseProvider: Provider = {
  provide: ProductGetDetailUseCase,
  useFactory: productGetDetailUseCaseFactory,
  deps: [ProductRepository]
};

export const productProviders: Provider[] = [
  productGetListUseCaseProvider,
  productGetDetailUseCaseProvider,
];
