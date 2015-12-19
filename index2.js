var fs = require('fs');
var _ = require('lodash');

var htmlPath = './main.html';
var html = fs.readFileSync(htmlPath, 'utf-8');

// var reg = /(?:(?: (?:href|src)=")([^"]+\.(?:js|css))(?="))/ig;
// var reg = /(?: (?:href|src)=")([^"]+\.(?:js|css))(?=")/ig;
var reg = /( (?:href|src)="(?:[^"]+\.(?:js|css)))(?=")/ig;

var htmlFragements = html.split(reg);

var result = _(htmlFragements)
    .forEach(revPath)
    .value()
    .join('');

console.log(result);


function revPath(fragment, index, fragments) {
    var reg = / (href|src)="(.+)/i;
    var match = reg.exec(fragment);
    if (match) {
        var path = match[2];
        console.log(path);
    }
}
