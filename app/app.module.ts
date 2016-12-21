import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent, HeroComponent, HeroDetailComponent, HeroListComponent } from './components/component.index';
import { HeroService } from './shared/services/hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroListComponent
    ],
    providers: [
      HeroService
    ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

