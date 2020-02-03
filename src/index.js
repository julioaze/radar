const express = require('express');
const mongoose =require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
  "mongodb+srv://master:gzR2Zmm5KBSzFUQF@cluster0-xcmfm.mongodb.net/radar?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
