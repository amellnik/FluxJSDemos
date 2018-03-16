import { Component, OnInit } from '@angular/core';

import * as dl from 'deeplearn';
import * as BSON from 'bson';
import * as flux from '../../assets/flux'

import * as model from '../../assets/fmnist-mlp'

@Component({
  selector: 'app-fmnist-mlp',
  templateUrl: './fmnist-mlp.component.html',
  styleUrls: ['./fmnist-mlp.component.css']
})
export class FmnistMlpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
