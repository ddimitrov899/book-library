import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {components} from "./components";
import {filters} from "./helpers";
import {commonComponents} from "./commons";
import { SearchPipe } from './filters-pipe/search/search.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SlugPipe } from './filters-pipe/translate/slug.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...commonComponents,
    ...filters,
    SearchPipe,
    SlugPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
