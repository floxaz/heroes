import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CreateComponent } from './create/create.component';

import { SelectDirective } from './shared/select.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CreateComponent,
    SelectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
