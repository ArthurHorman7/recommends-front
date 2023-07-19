import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BodyGlobalComponent } from './body-global/body-global.component';
import { SobreNosComponent } from './body-global/sobre-nos/sobre-nos.component';
import { AnimesComponent } from './body-global/animes/animes.component';
import { InformacoesComponent } from './body-global/informacoes/informacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyGlobalComponent,
    SobreNosComponent,
    AnimesComponent,
    InformacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
