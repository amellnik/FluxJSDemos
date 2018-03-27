let model = (function () {
  let math = dl.ENV.math;
  function ibex(giraffe) {
    return math.add(math.matrixTimesVector(model.weights[0], giraffe), model.weights[1]);
  };
  function prairiedog(panda) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[2], panda), model.weights[3]));
  };
  function model(goat) {
    return ibex(prairiedog(goat));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("decoder.bson").then((function (ws) {
  return model.weights = ws;
}));
