import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    WorksComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
