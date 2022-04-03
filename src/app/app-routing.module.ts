import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopComponent } from './shared/modules/develop/develop.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
  },
  {
    path: 'craft',
    // loadChildren: () => import('./craft/craft.module').then(m => m.CraftModule)
    component: DevelopComponent,
  },
  {
    path: 'recraft',
    // loadChildren: () => import('./recraft/recraft.module').then(m => m.RecraftModule)
    component: DevelopComponent,
  },
  {
    path: 'donations',
    // loadChildren: () => import('./donations/donations.module').then(m => m.DonationsModule)
    component: DevelopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
