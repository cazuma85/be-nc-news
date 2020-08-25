const knex = require('../db/connection');

exports.selectUsers = (params) => {
  console.log('====> in the modles');
  return knex
    .select('*')
    .from('users')
    .where("username" ,params.username)
    .then((users) => {
      if (users.length === 0) {
         return Promise.reject({ status: 404, msg: 'query does not exist' });
      }
      return users[0]
    })
  }
    //   const wantedUser = users.filter((oneUser) => {
    //     if (oneUser.username == query.username) {
    //       return oneUser;
    //     }
    //   });
    //   console.log(wantedUser);
    //  
    //   return wantedUser;
    // });

