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
  active_decoded: number[][];

  constructor(
    private arrays: ArraysService
  ) { }

  ngOnInit() {
    // Wait for all the weights and test images to load before doing anything
    Promise.all([
      flux.fetchWeights("/assets/autoencoder/encoder.bson"),
      flux.fetchWeights("/assets/autoencoder/decoder.bson"),
      flux.fetchBlob('/assets/fmnist-mlp/test_images.bson'),
      flux.fetchBlob('/assets/autoencoder/mnist_images.bson')
    ]).then(res => {
      this.encoder['weights'] = res[0];
      this.decoder['weights'] = res[1];
      this.fmnist = res[2]['images'].reshape([100, 784]);
      this.mnist = res[3]['images'].reshape([100, 784]);
      this.fmnistImage();
    })
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
    console.log("New fmnist image")
    let i = Math.floor(Math.random() * Math.floor(this.n_images-1));

    // Get the selected image as a js array of arrays
    this.active_long = this.fmnist.slice([i, 0], [1, 784]);
    let aj = this.active_long.dataSync();
    this.active_img = this.arrays.widen(aj, 28, 28);
    this.convert();
  }

  mnistImage() {
    console.log("New mnist image")
    let i = Math.floor(Math.random() * Math.floor(this.n_images-1));

    // Get the selected image as a js array of arrays
    this.active_long = this.mnist.slice([i, 0], [1, 784]);
    let aj = this.active_long.dataSync();
    this.active_img = this.arrays.widen(aj, 28, 28);
    this.convert();
  }

  convert() {
    // Now plot the image
    let data:any = [{
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
      },
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
      }
    };
    // Generates a warning -- see https://github.com/plotly/plotly.js/issues/2466
    Plotly.newPlot('input-plot', data, layout, {displayModeBar: false});

    // Now apply the model and plot the results
    const res = this.encoder(this.active_long.squeeze());
    this.encoding = res.dataSync();
    let encoding_img = this.arrays.widen(this.encoding, 2, 16);

    // Our layout is all set up, we can modify the data slightly and replot
    data[0]['z'] = encoding_img;
    data[0]['colorscale'] = "YIGnBu"
    Plotly.newPlot('encoding-plot', data, layout, {displayModeBar: false});

    // Apply the decoder to get the resulting image
    const res2 = this.decoder(res);
    this.active_decoded = this.arrays.widen(res2.dataSync(), 28, 28)

    // Our layout is all set up, we can modify the data slightly and replot
    data[0]['z'] = this.active_decoded;
    data[0]['colorscale'] = "Greys";
    Plotly.newPlot('output-plot', data, layout, {displayModeBar: false});

  }

}
