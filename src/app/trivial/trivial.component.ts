import { Component, OnInit } from '@angular/core';

import * as dl from 'deeplearn';
import * as BSON from 'bson';
import * as flux from '../../assets/flux'

import  '../../assets/trivial/index.js'
declare var model: any;

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    let a = dl.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
    console.log(model(a))
  }

}
