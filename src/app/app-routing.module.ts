import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PsPdfViewerComponent } from './ps-pdf-viewer/ps-pdf-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: PsPdfViewerComponent
      },
      // {
      //   path: 'account',
      //   loadChildren: () => import('./modules/account/franchise.module').then(m => m.FranchiseModule)
      // }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
