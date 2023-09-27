console.log('argv 속성의 피라미터 수 : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function (item, index) {
  console.log(index + ' : ' + item);
});
