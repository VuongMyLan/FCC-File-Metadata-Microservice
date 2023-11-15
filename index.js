var express = require('express');
var cors = require('cors');
require('dotenv').config();
let multer = require('multer');
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const upload = multer();
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    console.log('res', req.file);
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
    });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Your app is listening on port ' + port);
});
