import { Component, OnInit } from '@angular/core';

import * as dl from 'deeplearn';
import * as BSON from 'bson';
import * as flux from '../../assets/flux'


@Component({
  selector: 'app-fmnist-mlp',
  templateUrl: './fmnist-mlp.component.html',
  styleUrls: ['./fmnist-mlp.component.css']
})
export class FmnistMlpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    flux.fetchWeights('../../assets/fmnist-mlp/mlp.bson').then(ws => this.model['weights'] = ws);
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

  }


}
