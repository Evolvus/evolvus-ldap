const PORT = process.env.PORT || 8089;

const debug = require("debug")("evolvus-ldap");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

app.use(bodyParser.json({
    limit: '1mb'
  }));

require("./app/main")(router);

app.use("/api", router);



const server = http.createServer(app);

server.listen(PORT, () => {
    debug("server started: ", PORT);
    app.emit("application_started");
});