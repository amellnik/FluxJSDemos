let model = (function () {
  let math = dl.ENV.math;
  function caterpillar(dogfish) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[0], dogfish), model.weights[1]));
  };
  function caribou(badger) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[2], badger), model.weights[3]));
  };
  function model(loris) {
    return caterpillar(caribou(loris));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("encoder.bson").then((function (ws) {
  return model.weights = ws;
}));
