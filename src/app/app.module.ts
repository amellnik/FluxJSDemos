import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from "@clr/angular";
// import { ClarityIcons } from '@clr/icons';
import { BSON } from "bson";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FmnistMlpComponent } from './fmnist-mlp/fmnist-mlp.component';
import { TrivialComponent } from './trivial/trivial.component';

import { ArraysService } from './util/arrays.service';
// import { CharRnnComponent } from './char-rnn/char-rnn.component';
import { AutoencoderComponent } from './autoencoder/autoencoder.component';
// import { VaeComponent } from './vae/vae.component';

const appRoutes: Routes = [
  { path: 'trivial', component: TrivialComponent },
  { path: 'fmnist-mlp', component: FmnistMlpComponent },
  { path: 'autoencoder', component: AutoencoderComponent },
  // { path: 'char-rnn', component: CharRnnComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FmnistMlpComponent,
    TrivialComponent,
    // CharRnnComponent,
    AutoencoderComponent
    // VaeComponent
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
export class AppModule {
  constructor() { }
}
