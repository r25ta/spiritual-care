import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoersComponent } from './goers/goers/goers.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    GoersComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class GoersModule { }
