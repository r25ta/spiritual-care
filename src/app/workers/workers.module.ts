import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers/workers.component';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [WorkersComponent],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    SharedModule,
    AppMaterialModule,
  ],
})
export class WorkersModule {}
