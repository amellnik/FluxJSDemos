let model = (function () {
  let math = tf;
  function bat(ant) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[0], ant), model.weights[1]));
  };
  function chicken(barracuda) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[2], barracuda), model.weights[3]));
  };
  function model(cobra) {
    return bat(chicken(cobra));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("encoder.bson").then((function (ws) {
  return model.weights = ws;
}));
