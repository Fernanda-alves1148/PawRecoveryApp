import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternacaoPageRoutingModule } from './internacao-routing.module';

import { InternacaoPage } from './internacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternacaoPageRoutingModule
  ],
  declarations: [InternacaoPage]
})
export class InternacaoPageModule {}
