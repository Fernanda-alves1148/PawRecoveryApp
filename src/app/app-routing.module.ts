import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pet',
    loadChildren: () => import('./pages/pet/pet.module').then( m => m.PetPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./pages/consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'vacinas',
    loadChildren: () => import('./pages/vacinas/vacinas.module').then( m => m.VacinasPageModule)
  },
  {
    path: 'internacao',
    loadChildren: () => import('./pages/internacao/internacao.module').then( m => m.InternacaoPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./pages/receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
