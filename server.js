const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
/**  const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/index.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, _ => {
    console.log(`App deployed at ${PORT}`);
});
*/

app.use(express.static('dist'));
app.use('/css', express.static(__dirname + 'dist/'));
app.use('/js', express.static(__dirname + 'dist/js'));
app.use('/image', express.static(__dirname + 'dist/image'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => console.info(`Listening to port ${port}`));