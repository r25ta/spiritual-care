import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkersComponent } from './workers/workers.component';

//Connecting component with route module
const routes: Routes = [
  {path: '', component: WorkersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersRoutingModule {}
