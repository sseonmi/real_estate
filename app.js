const express = require('express');
const sequelize = require('./models/Model').sequelize; // sequelize require

const app = express();
const port = 3000;


sequelize.sync();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.use(express.json())
app.use(express.urlencoded({extends: true}));


app.use('/', require('./routes/roomPrice'));