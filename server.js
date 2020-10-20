
var express = require('express');
var app = express();
app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});

var cors = require('cors');
const data = require('./public/data3.json')
app.use(express.static(__dirname+'/public'));

// console.log(data);
//for staic data
app.get('/', (req, res) => {
    res.sendFile(index.js)
})

//for dynamic data
app.get('/eco', (req, res) => {
    let year=req.query.year;
    res.json(data['economyBowlers'][year])
})
app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

