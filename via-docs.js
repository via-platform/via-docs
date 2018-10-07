const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use(express.static('static'));

app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
app.listen(3003, () => console.log('Via Docs ready on port 3003.'));
