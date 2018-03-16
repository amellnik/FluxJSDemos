import * as dl from 'deeplearn';
import * as flux from '../flux'

let model = (function () {
  let math = dl.ENV.math;
  function model(owl) {
    return owl;
  };
  model.weights = [];
  return model;
})();
// flux.fetchWeights("model.bson").then((function (ws) {
//   return model.weights = ws;
// }));
