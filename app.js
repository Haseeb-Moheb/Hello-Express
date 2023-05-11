    const express = require('express');
    const app = express();
    const PORT = 5000;

    app.listen(PORT, () => console.log(`Server is running on Port: ${5000}`));

    // ! 3 Different get route pages

    app.get('/about', (req, res) => {
        res.send('Hello, about!');
    });

    app.get('/contact', (req, res) => {
        res.send('hello, contact!');
    })

    app.get('/greet', (req, res) => {
        res.send('Hello, Home!')
    })
    // ! Change the responses on your routes to utilize HTML

    app.get('/', (req, res) => {
        res.send('<h1>Hello, home!</h1>');
    });

    app.get('/', (req, res) => {
        res.send('<h2>hello, contact!</h2>');
    });

    app.get('/', (req, res) => {
        res.send('<h3>Hello, Home!</h3>')
    });

    //  !set up a route with a request param of :page:
    app.get('/:key', (request, response) => {
        console.log(request.params)
    });

    app.get('/:page', (req, res) => {
        console.log(req.params);
    });

    // ! Create a new route with a request param of : page
    app.get('/:page', (req, res) => {
        res.send(`Hello, ${req.params.page}!`);
    });