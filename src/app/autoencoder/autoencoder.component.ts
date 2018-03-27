import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../util/arrays.service';

import * as Plotly from "plotly.js/dist/plotly.js";
import { Config, Data, Layout } from "plotly.js/dist/plotly.js";

import * as dl from 'deeplearn';
import * as BSON from 'bson';
import * as flux from '../../assets/flux';

@Component({
  selector: 'app-autoencoder',
  templateUrl: './autoencoder.component.html',
  styleUrls: ['./autoencoder.component.css']
})
export class AutoencoderComponent implements OnInit {

  images: any;

  constructor() { }

  ngOnInit() {
    flux.fetchWeights("/assets/autoencoder/encoder.bson").then((function (ws) {
      return this.encoder['weights'] = ws;
    }));

    flux.fetchWeights("/assets/autoencoder/decoder.bson").then((function (ws) {
      return this.decoder['weights'] = ws;
    }));
  }

  encoder = (function () {
    let math = dl.ENV.math;
    function caterpillar(dogfish) {
      return math.relu(math.add(math.matrixTimesVector(encoder['weights'][0], dogfish), encoder['weights'][1]));
    };
    function caribou(badger) {
      return math.relu(math.add(math.matrixTimesVector(encoder['weights'][2], badger), encoder['weights'][3]));
    };
    function encoder(loris) {
      return caterpillar(caribou(loris));
    };
    encoder['weights'] = [];
    return encoder;
  })();

  decoder = (function () {
    let math = dl.ENV.math;
    function ibex(giraffe) {
      return math.add(math.matrixTimesVector(decoder['weights'][0], giraffe), decoder['weights'][1]);
    };
    function prairiedog(panda) {
      return math.relu(math.add(math.matrixTimesVector(decoder['weights'][2], panda), decoder['weights'][3]));
    };
    function decoder(goat) {
      return ibex(prairiedog(goat));
    };
    decoder['weights'] = [];
    return decoder;
  })();

}
