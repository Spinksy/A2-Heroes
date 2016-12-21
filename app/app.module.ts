import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent, HeroComponent, HeroDetailComponent, HeroListComponent } from './components/component.index';

import { HeroService } from './shared/services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    { path: 'heroes', component: HeroComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ])
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

