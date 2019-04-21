const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res, next) => {
	res.send('Hello world');
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});