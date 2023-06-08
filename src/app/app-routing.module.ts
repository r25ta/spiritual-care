import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Configuring the workers module in the application's main routing
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'workers'},
  {path: 'workers',
    loadChildren:() => import('./workers/workers.module').then(m => m.WorkersModule)
  },
  {path: 'goers',
    loadChildren:() => import('./goers/goers.module').then(m => m.GoersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
