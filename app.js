const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use((req, res, next) => {

	req.user = {
		name: 'anoop'
	};
    console.log('common middleware');
	next();
});

function auth(req, res, next) {

	console.log('auth middleware');

	next();

}

app.get('/', auth, (req, res) => {

	res.json({
		app: 'demo',
		version: '0.0.1'
	});
});


app.listen(3500, () => console.log("App started on port 3500"));