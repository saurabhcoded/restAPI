const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    originalError: err.message,
  };
};

module.exports = errorHandler;
