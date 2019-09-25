var app = require('express')();

app.use( (req, res, next) => {
	res.json({ title: 'pong' })
})

app.listen(3015, ()=>console.log('run fake server'));


// require('./v8_profiler.js')();
