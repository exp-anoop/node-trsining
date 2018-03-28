const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

	const user = {
		name: 'Anoop',
		age: 30
	}


	res.status(204).json({
		user
	});
});

app.listen(port, () => console.log('running on ' + port));