import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoersComponent } from './goers/goers.component';
import { SharedModule } from '../shared/shared.module';
import { GoersRoutingModule } from './goers-routing.module';

@NgModule({
  declarations: [GoersComponent],
  imports: [CommonModule, SharedModule, GoersRoutingModule],
})
export class GoersModule {}
