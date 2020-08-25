const { selectTopics } = require('../modles/topics.modles');
const getTopics = (req, res, next) => {
  console.log('===> in the controller');
  selectTopics()
    .then((topics) => {
      res.send({ topics });
    })
    .catch(next);
};
module.exports = getTopics;
