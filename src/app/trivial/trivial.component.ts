import { Component, OnInit } from '@angular/core';

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
    function model(owl) {
      return owl;
    };
    model['weights'] = [];
    return model;
  })();

  ngOnInit() {
    let a = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
    this. resultText = this.model(a).toString();
  }

}
