import { UserScreenComponent } from './components/user-screen/user-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-screen',
    pathMatch: 'full'
  },
  {
    path: 'user-screen',
    component: UserScreenComponent
  },
  {
    path: '**',
    redirectTo: 'user-screen'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
