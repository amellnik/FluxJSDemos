import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../util/arrays.service';

import * as Plotly from "plotly.js/dist/plotly.js";
import { Config, Data, Layout } from "plotly.js/dist/plotly.js";

import * as dl from 'deeplearn';
import * as BSON from 'bson';
import * as flux from '../../assets/flux'


@Component({
  selector: 'app-fmnist-mlp',
  templateUrl: './fmnist-mlp.component.html',
  styleUrls: ['./fmnist-mlp.component.css']
})
export class FmnistMlpComponent implements OnInit {

  images: any; // Is there really not a Tensor type?
  labels: any;
  n_images = 100;

  constructor(
    private arrays: ArraysService
  ) { }

  ngOnInit() {

    // Async load the weights into the model
    flux.fetchWeights('../../assets/fmnist-mlp/mlp.bson').then(ws => {
      this.model['weights'] = ws;
      this.test();
    });

    // Async load 100 test images
    flux.fetchBlob('../../assets/fmnist-mlp/test_images.bson').then(data => {
      console.log(data)
      // this.images = data['images'].reshape([784, 100]);
      this.images = data['images'].reshape([100, 784]);
      this.labels = data['labels'];
      this.selectRandomImage();
    });
  }

  model = (function () {
    let math = dl.ENV.math;
    function ibis(lobster) {
      return math.add(math.matrixTimesVector(model['weights'][0], lobster), model['weights'][1]);
    };
    function camel(wren) {
      return math.relu(math.add(math.matrixTimesVector(model['weights'][2], wren), model['weights'][3]));
    };
    function model(turkey) {
      return math.softmax(ibis(camel(turkey)));
    };
    model['weights'] = [];
    return model;
  })();


  test() {
    // Make a random input image and then output the results from the model
    // Step 1, make a 784-element js array with values between 0 and 1
    // const aj = new Array(784).fill(0).map(x => Math.random());
    // const at = dl.tensor1d(aj);
    // const res = this.model(at);
    // console.log(res.dataSync())
  }


  selectRandomImage() {
    let i = Math.floor(Math.random() * Math.floor(this.n_images-1));
    console.log(this.images)
    const long = this.images.slice([i, 0], [1, 784]);
    let aj = long.dataSync();
    let square = this.arrays.widen(aj, 28, 28);

    // Now plot the image
    let data = [{
      z: square,
      type: 'heatmap',
      colorscale: 'Greys',
      showscale: false,
      reversescale: true
    }];
    let layout = {
      title: "Image #" + i,
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
    Plotly.newPlot('img-plot', data, layout);

    // Now apply the model and plot the results
    const res = this.model(long.squeeze());
    let preds = res.dataSync();

    let pdata = [{
      x: ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat', 'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle Boot'],
      y: preds,
      type: 'bar'
    }];
    let playout = {
      yaxis: {
        title: 'Likelihood'
      }
    }
    Plotly.newPlot('probs-plot', pdata, playout);
  }


}
