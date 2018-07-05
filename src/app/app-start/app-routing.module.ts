import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { ViewComponent } from '../view/view.component'
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: '', redirectTo: '/TaskList', pathMatch: 'full' },
  { path: 'TaskList', component: TaskComponent },
  { path: 'ViewStatus', component: ViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
