import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CreateComponent } from './create/create.component';
import { PreviewComponent } from './create/preview/preview.component';
import { FooterComponent } from './footer/footer.component';

import { SelectDirective } from './shared/select.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CreateComponent,
    PreviewComponent,
    FooterComponent,
    SelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
