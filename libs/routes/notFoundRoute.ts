import errorHandler from "./errorHandler";

const notFound = (req, res, next) => {
  // console.log("Lost");
  // res.status(404).send("Not Found");
  // next();
  const error = {
    error: "Not Found",
    message: "Invalid Request",
    status: 404,
  };
  next(error);
};

export default notFound;
