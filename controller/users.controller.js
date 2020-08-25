const { selectUsers } = require('../modles/users.modles');
const getUsers = (req, res, next) => {
  console.log('===> in the controller');
  selectUsers(req.params)
    .then((user) => {
      res.send({ user });
    })
    .catch(next);
};
module.exports = getUsers;
