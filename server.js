const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads');
	},
	filename: function(req, file, cb) {
		console.log(file);
		cb(null, file.originalname);
	}
});
var upload = multer({ storage: storage });

app.use(cors());
app.get('/', (req, res) => {
	res.send('Rogue follows the religion of Islam and Allah is the most gracious');
});

app.post('/upload', upload.single('info'), function(req, res, next) {
	// console.log('test');
	// console.log(req);
	const file = req.file;
	if (!file) {
		const error = new Error('Please upload a file');
		error.httpStatusCode = 400;
		return next(error);
	}
	res.send(file);
});
// Initializing the server
app.listen(2000, () => {
	console.log(`Server listening on Port 2000`);
});
