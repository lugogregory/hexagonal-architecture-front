import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    {
       path: 'product',
       loadComponent: () => import('./features/products/presentation/product/product.component').then((c: any) => c.ProductComponent )
     },
     { path: '**', redirectTo: 'product', pathMatch: 'full' }

];
