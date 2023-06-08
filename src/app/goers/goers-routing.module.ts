import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoersComponent } from './goers/goers/goers.component';

//Connecting component with route module
const routes: Routes = [
  {path: 'goers', component: GoersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoersRoutingModule {}
