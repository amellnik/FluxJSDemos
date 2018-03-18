import { Component, OnInit } from '@angular/core';

import * as dl from 'deeplearn';
import * as BSON from 'bson';
import * as flux from '../../assets/flux'

// import  '../../assets/trivial/index.js'


@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent implements OnInit {

  resultText = "";

  constructor() { }

  model = (function () {
    let math = dl.ENV.math;
    function model(owl) {
      return owl;
    };
    model['weights'] = [];
    return model;
  })();

  ngOnInit() {
    let a = dl.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
    this. resultText = this.model(a).toString();
  }

}
