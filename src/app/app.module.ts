import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from "@clr/angular";
import { BSON } from "bson";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FmnistMlpComponent } from './fmnist-mlp/fmnist-mlp.component';
import { TrivialComponent } from './trivial/trivial.component';

import { ArraysService } from './util/arrays.service';

const appRoutes: Routes = [
  { path: 'trivial', component: TrivialComponent },
  { path: 'fmnist-mlp', component: FmnistMlpComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FmnistMlpComponent,
    TrivialComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    ClarityModule
  ],
  providers: [ArraysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
