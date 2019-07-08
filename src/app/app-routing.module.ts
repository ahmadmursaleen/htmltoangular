import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing Components
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { PracticeAreasComponent } from './views/practice-areas/practice-areas.component';
import { TeamComponent } from './views/team/team.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'practiceareas',
    component: PracticeAreasComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
