import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PopupComponent } from './popup/popup.component';
import { MatCardModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [ListComponent, PopupComponent],
  exports: [ListComponent, PopupComponent]
})
export class SharedModule { }
