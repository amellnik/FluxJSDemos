import { Injectable } from '@angular/core';

@Injectable()
export class ArraysService {

  constructor() { }

  // Take an array of length r*c and convert it into a nested array of c elements, each of which is an array with r elements
  widen<T>(a: Array<T>,  r:number, c:number) {
    var res: T[][] = [];
    if (a.length !== r*c) throw new Error('Array length does not match output dimensions')
    for (let i=0; i<c; i=i+1) {
      res.push([]);
      for (let j=0; j<r; j=j+1) {
        res[i].push(a[i*r+j]);
        // res[i].push(a[i+j*c]);
      }
    }
    return res;
  }

}
