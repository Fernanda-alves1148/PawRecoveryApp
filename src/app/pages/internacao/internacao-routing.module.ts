import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternacaoPage } from './internacao.page';

const routes: Routes = [
  {
    path: '',
    component: InternacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternacaoPageRoutingModule {}
