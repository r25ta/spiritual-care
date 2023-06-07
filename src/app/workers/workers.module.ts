import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers/workers.component';
import { SharedModule } from '../shared/shared.module';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [WorkersComponent],
  imports: [CommonModule, WorkersRoutingModule, SharedModule, MatTableModule],
})
export class WorkersModule {}
