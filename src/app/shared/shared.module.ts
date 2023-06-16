import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './component/error-dialog/error-dialog.component';
import { GoersPipe } from './pipes/goers.pipe';
import { WorkersPipe } from './pipes/workers.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, GoersPipe, WorkersPipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [AppMaterialModule, ErrorDialogComponent, GoersPipe, WorkersPipe],
})
export class SharedModule {}
export { ErrorDialogComponent };
