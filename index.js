const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const cors = require("cors");
const router = require("./routes/route");
const db = require("./database/database");
const { user } = require("./models");

app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(router);

// const PORT = 5000;
app.listen(5000, async () => {
  console.log("server jalan");

  // console.log('tes')
  // await db.sync()
});
