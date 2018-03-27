let model = (function () {
  let math = dl.ENV.math;
  function dinosaur(hyena) {
    return math.add(math.matrixTimesVector(model.weights[0], hyena), model.weights[1]);
  };
  function locust(raven) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[2], raven), model.weights[3]));
  };
  function model(lapwing) {
    return math.softmax(dinosaur(locust(lapwing)));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("mlp.bson").then((function (ws) {
  return model.weights = ws;
}));
