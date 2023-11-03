import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';


// COMPONENTS
const routes: Routes = [    
  { path: '', component: HomeComponent, data:{ title: 'Inicio' } },
  { path: 'about', component: AboutComponent, data:{ title: 'About' } },
  { path: 'contact', component: ContactComponent, data:{ title: 'Contact' } },
  { path: 'works', component: WorksComponent, data:{ title: 'Works' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
