import { AnimesComponent } from './body-global/animes/animes.component';
import { InformacoesComponent } from './body-global/informacoes/informacoes.component';

import { SobreNosComponent } from './body-global/sobre-nos/sobre-nos.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sobreNos',
    component: SobreNosComponent
  },
  {
    path: '',
    component: AnimesComponent
  },
  {
    path: 'informacoes',
    component: InformacoesComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
