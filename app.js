var bleacon = require('bleacon');
var request = require('request');
var config = require('./config');

if (!config.id) {
  console.error('Error: config.jsonにidを書いてね');
  process.exit(1);
}

bleacon.startScanning(config.uuid ? config.uuid.replace(/-/g, '').toLowerCase() : null);

bleacon.on('discover', function(data) {
  data.id = config.id;
  console.log(data);
  request.post('http://html5-export-hackathon-ibeacon.herokuapp.com/', { form: data });
});
