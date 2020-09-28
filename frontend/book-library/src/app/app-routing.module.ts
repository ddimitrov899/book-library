import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BookCreateComponent} from "./components/book/book-create/book-create.component";
import {BookUpdateComponent} from "./components/book/book-update/book-update.component";
import {BookViewComponent} from "./components/book/book-view/book-view.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'book/create', component: BookCreateComponent},
  {path: 'book/update/:slug', component: BookUpdateComponent},
  {path: 'book/:slug', component: BookViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
