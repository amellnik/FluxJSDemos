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

  fmnist: any;
  mnist: any;
  n_images = 100;
  encoding: any;
  active_long: any;
  active_img: number[][];

  constructor(
    private arrays: ArraysService
  ) { }

  ngOnInit() {
    flux.fetchWeights("/assets/autoencoder/encoder.bson").then(ws => {
      return this.encoder['weights'] = ws;
    });

    flux.fetchWeights("/assets/autoencoder/decoder.bson").then(ws => {
      return this.decoder['weights'] = ws;
    });

    // Async load images
    flux.fetchBlob('/assets/fmnist-mlp/test_images.bson').then(data => {
      this.fmnist = data['images'].reshape([100, 784]);
      this.fmnistImage();
    });

    // Async load 100 test images
    flux.fetchBlob('/assets/autoencoder/mnist_images.bson').then(data => {
      this.mnist = data['images'].reshape([100, 784]);
    });
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

  fmnistImage() {
    let i = Math.floor(Math.random() * Math.floor(this.n_images-1));

    // Get the selected image as a js array of arrays
    this.active_long = this.fmnist.slice([i, 0], [1, 784]);
    let aj = this.active_long.dataSync();
    this.active_img = this.arrays.widen(aj, 28, 28);
    this.convert();
  }

  mnistImage() {
    let i = Math.floor(Math.random() * Math.floor(this.n_images-1));

    // Get the selected image as a js array of arrays
    this.active_long = this.mnist.slice([i, 0], [1, 784]);
    let aj = this.active_long.dataSync();
    this.active_img = this.arrays.widen(aj, 28, 28);
  }

  convert() {
    // Now plot the image
    let data = [{
      z: this.active_img,
      type: 'heatmap',
      colorscale: 'Greys',
      showscale: false,
      reversescale: true
    }];
    let layout = {
      xaxis: {
        autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
      },
      yaxis: {
        autorange: 'reversed',
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
      }
    };
    // Generates a warning -- see https://github.com/plotly/plotly.js/issues/2466
    Plotly.newPlot('input-plot', data, layout);

    // Now apply the model and plot the results
    console.log(this.active_long);
    console.log(this.encoder['weights']);
    // const res = this.encoder(this.active_long.squeeze());
    // this.encoding = res.dataSync();
  }

}
