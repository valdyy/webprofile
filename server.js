const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use('/css', express.static(__dirname + 'dist/'));
app.use('/js', express.static(__dirname + 'dist/js'));
app.use('/image', express.static(__dirname + 'dist/image'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})

module.exports = app;