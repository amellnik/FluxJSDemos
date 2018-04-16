import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../util/arrays.service';

import * as Plotly from "plotly.js/dist/plotly.js";
import { Config, Data, Layout } from "plotly.js/dist/plotly.js";

// import * as dl from 'deeplearn';
let dl: any;
import * as BSON from 'bson';
import * as flux from '../../assets/flux'


@Component({
  selector: 'app-char-rnn',
  templateUrl: './char-rnn.component.html',
  styleUrls: ['./char-rnn.component.css']
})
export class CharRnnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
