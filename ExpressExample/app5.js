var experss = require('express');
var http = require('http');

var app = experss();

app.set('port', process.env.PORT || 3001);

app.use(function (req, res, next) {
  console.log('첫번째 미들웨어 호출됨');

  res.redirect('http://google.co.kr');
});

var server = http.createServer(app).listen(app.get('port'), function () {
  console.log('익스프레스로 서버를 실행함 : ' + app.get('port'));
});
