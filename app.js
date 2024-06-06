const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
// const swaggerUi = require("swagger-ui-express");
// const yaml = require("yamljs");
// const swaggerDocs = yaml.load("swagger.yaml");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/front/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/front/build/index.html"))
);

const db = require("./models");
const productsRoutes = require("./routes/products.routes");
db.sequelize.sync().then(() => console.log("db is ready"));
app.use("/api/products", productsRoutes);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
module.exports = app;
