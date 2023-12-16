// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//   res.sendfile('index.html');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/data') {
    const data = JSON.stringify({
      products: [
        { name: 'Product 1', price: 100, description: 'Description 1', image: 'image1.jpg' },
        { name: 'Product 2', price: 200, description: 'Description 2', image: 'image2.jpg' },
      ],
      users: [
        { name: 'User 1', lastName: 'Lastname 1', email: 'user1@example.com', avatar: 'avatar1.jpg' },
        { name: 'User 2', lastName: 'Lastname 2', email: 'user2@example.com', avatar: 'avatar2.jpg' },
      ],
      posts: [
        { title: 'Post 1', content: 'Content 1', author: 'Author 1', date: '2022-01-01' },
        { title: 'Post 2', content: 'Content 2', author: 'Author 2', date: '2022-01-02' },
      ],
      articles: [
        { title: 'Article 1', content: 'Content 1', author: 'Author 1', date: '2022-01-01' },
        { title: 'Article 2', content: 'Content 2', author: 'Author 2', date: '2022-01-02' },
      ],
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});