var url = require('url');

var urlStr =
  'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=popcorn&oquery=prpcorn&tqi=h%2Bcg%2FlprvmZssFL65N0ssssss4l-520472';
var curUrl = url.parse(urlStr);

console.dir(curUrl);

console.log('query ->' + curUrl.query);

var curStr = url.format(curUrl);
console.log('url -> ' + curStr);

var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log('검색어: ' + params.query);
