import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatRadioModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from '../../../home/home.component';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    SharedRoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
