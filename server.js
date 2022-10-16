const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();
const routes = require("./routes/index");

// middlewares
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server is runnning on port ${PORT}`);
});
