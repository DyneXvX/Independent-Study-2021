const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(process.cwd() + '/public')));
app.use("/", (req, res, next) => {    
  res.sendFile(path.join(process.cwd() + '/public/views/index.html'));
});
app.listen(port);
