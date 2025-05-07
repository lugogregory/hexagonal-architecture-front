import { Component, OnInit } from '@angular/core';
import { productProviders } from '../../providers/product.provider';
import { ProductRepository } from '../../modules/domain/product.repository';
import { ProductDummyJsonImplRepository } from '../../modules/infrastructure/product-dummyjson-impl.repository';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductList } from '../../modules/domain/product.model';
import { CommonModule } from '@angular/common';
import { ConfigService } from '@app/core/services/config.service';
import { AppConfig } from '@app/core/models/app-config.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [
    ...productProviders,
    ProductService,
    {
      provide: ProductRepository,
      useClass: ProductDummyJsonImplRepository,
    },
    // {
    //   provide: ProductRepository,
    //   useClass: ProductMockImplRepository, //?   You can switch between the mock and dummyjson implementations.
    // },
  ],
})
export class ProductComponent implements OnInit {
  public products$!: Observable<ProductList>;
  public appConfig$!: Observable<AppConfig | null>;
  constructor(private productService: ProductService, private appConfig: ConfigService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProductList();
    this.appConfig$ = this.appConfig.appConfig$;
  }
}
