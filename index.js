var fs = require('fs');

var jsdom = require('jsdom').jsdom;

var htmlPath = './main.html';
var jqueryPath = './jquery.js';

var html = fs.readFileSync(htmlPath);

var window = jsdom(html).defaultView;

console.log(window.document);
