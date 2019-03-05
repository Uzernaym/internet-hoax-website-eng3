/* The express module is used to look at the address of the request and send it to the correct function */
var express = require('express');

/* The http module is used to listen for requests from a web browser */
var http = require('http');

/* The path module is used to transform relative paths to absolute paths */
var path = require('path');

/* Creates an express application */
var app = express();

/* Creates the web server */
var server = http.createServer(app);

/* Defines what port to use to listen to web requests */
var port = process.env.PORT ? parseInt(process.env.PORT) : 8080;


/* Defines what function to call when a request comes from the path '/' in http://localhost:8080 */
app.get('/', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './index.html')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/css/modules1', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './css/modules1.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/css/modules2', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './css/modules2.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/css/modules3', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './css/modules3.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/images/poweredby_mediawiki_132x47.png', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './images/poweredby_mediawiki_132x47.png')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/images/wikimedia-button-1.5x.png', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './images/wikimedia-button-1.5x.png')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/images/enwiki.png', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './images/enwiki.png')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/no.html', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './no.html')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});




app.get('/test', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './indexTest.html')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/index.css', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './index.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/index2.css', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './index2.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/index3.css', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './index3.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/index4.css', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './index4.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});

app.get('/index5.css', (req, res, next) => {

    /* Get the absolute path of the html file */
    var filePath = path.join(__dirname, './index5.css')

    /* Sends the html file back to the browser */
    res.sendFile(filePath);
});


/* Defines what function to all when the server recieves any request from http://localhost:8080 */
server.on('listening', () => {

    /* Determining what the server is listening for */
    var addr = server.address()
        , bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port
        ;

    /* Outputs to the console that the webserver is ready to start listenting to requests */
    console.log('Listening on ' + bind);
});

/* Tells the server to start listening to requests from defined port */
server.listen(port);