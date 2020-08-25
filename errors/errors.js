const handlePathErrors = (req, res, next) => {
  res.status(404).send({
    msg: 'Path not found, try again.',
  });
};
const PSQLErrors = (err, req, res, next) => {
  const psqlCodes = ["42703", "22P02"];
  if (psqlCodes.includes(err.code)) {
    res.status(400).send({ msg: "Bad request!" });
  } else next(err);
};
const customErr = (err, req, res, next) => {
  if ('status' in err) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
};
const internalServerError = (err, req, res, next) => {
  res.status(500).send({ msg: 'Internal server error!' });
};

module.exports = { handlePathErrors, internalServerError, customErr, PSQLErrors };
