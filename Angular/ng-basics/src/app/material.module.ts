import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [MatCardModule, MatButtonModule],
  exports: [MatCardModule, MatButtonModule]
})
export class AppMaterialModule { }