import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
