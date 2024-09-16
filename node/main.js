const express = require('express');
const app = express();

// Hello World with Express
app.get('/', (req, res) => {
	res.type('text/plain');
	res.send('Hello, World!');
});

app.listen(1325, () => {
	console.log('Server running on port 1323');
});

