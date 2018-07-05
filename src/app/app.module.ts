import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import{ AppComponent } from './app.component';
import{ HomeComponent } from './home/home.component';
import{ TaskComponent } from './task/task.component';
import { ViewComponent } from './view/view.component';
import { AppRoutingModule } from './app-start/app-routing.module';
import { HttpModule } from '@angular/http';
import { FilterPipe }from './forms/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    ViewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
