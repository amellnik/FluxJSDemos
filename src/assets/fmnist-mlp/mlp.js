let model = (function () {
  let math = tf;
  function alligator(coati) {
    return math.add(math.matrixTimesVector(model.weights[0], coati), model.weights[1]);
  };
  function cobra(eland) {
    return math.relu(math.add(math.matrixTimesVector(model.weights[2], eland), model.weights[3]));
  };
  function model(jellyfish) {
    return math.softmax(alligator(cobra(jellyfish)));
  };
  model.weights = [];
  return model;
})();
flux.fetchWeights("mlp.bson").then((function (ws) {
  return model.weights = ws;
}));
