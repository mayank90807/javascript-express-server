export default function errorHandler(err, req, res, next) {
  const error = {
    DetailedError: err,
    error: err.error ? err.error : "Default Error",
    message: err.message ? err.message : "error",
    status: err.status ? err.status : 500,
    timestamp: new Date(),
  };
  res.status(error.status).send(error);
}
