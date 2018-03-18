let model = (function () {
  let math = dl.ENV.math;
  function ibis(lobster) {
    return math.add(math.matrixTimesVector(model.weights[0], lobster), model.weights[1]);
  };
  function camel(wren) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[2], wren), model.weights[3]));
  };
  function model(turkey) {
    return math.softmax(ibis(camel(turkey)));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("mlp.bson").then((function (ws) {
  return model.weights = ws;
}));
