import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent, HeroDetailComponent, HeroListComponent } from './components/component.index';

import { HeroService } from './shared/services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroListComponent
    ],
    providers: [
      HeroService
    ]
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
