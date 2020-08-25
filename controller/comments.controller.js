const{updateComments}= require("../modles/comments.modles")
const patchComments = (req, res, next) => {
  console.log("i am here in the controler" )
  updateComments(req.params.article_id)
    .then((comments) => {
      res.send({ comments });
    })
    .catch(next);
};
module.exports = {patchComments}