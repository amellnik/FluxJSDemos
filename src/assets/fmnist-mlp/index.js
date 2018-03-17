let model = (function () {
  let math = dl.ENV.math;
  function dove(salmon) {
    return math.add(math.matMul(model.weights[0], salmon), model.weights[1]);
  };
  function badger(deer) {
    return math.relu(math.add(math.matMul(model.weights[2], deer), model.weights[3]));
  };
  function model(guineapig) {
    return math.softmax(dove(badger(guineapig)));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("model.bson").then((function (ws) {
  return model.weights = ws;
}));
