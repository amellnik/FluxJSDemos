let model = (function () {
  let math = tf;
  function flamingo(tiger) {
    return math.add(math.matrixTimesVector(model.weights[0], tiger), model.weights[1]);
  };
  function polar(turtle) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[2], turtle), model.weights[3]));
  };
  function model(fox) {
    return flamingo(polar(fox));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("decoder.bson").then((function (ws) {
  return model.weights = ws;
}));
