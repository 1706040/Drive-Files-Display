import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './folders/folders.component'

const routes: Routes = [
  { path: 'folders', component: FoldersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
