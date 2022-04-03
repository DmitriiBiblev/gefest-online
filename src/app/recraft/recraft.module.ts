import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecraftRoutingModule } from './recraft-routing.module';
import { RecraftComponent } from './recraft.component';


@NgModule({
  declarations: [
    RecraftComponent
  ],
  imports: [
    CommonModule,
    RecraftRoutingModule
  ]
})
export class RecraftModule { }
