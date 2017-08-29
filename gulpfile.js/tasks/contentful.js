var gulp = require('gulp');
var fs = require('fs-extra');
var contentful = require('contentful');
var path = require('path');

var config = require('../../config');

var content = null;
if(fs.existsSync(config.contentful.dataFile)) {
  content = fs.readJsonSync(config.contentful.dataFile);  
}

gulp.task('contentful-data', function(callback) {
  if(content) {
    console.log(`Data found in local file: ${config.contentful.dataFile}, skipping data download`);
    callback();
  } else {
    var client = contentful.createClient({
      space: '120isn2kd1u4',
      accessToken: '58858944ee02a6851206edfd3f6fde67182104c16ae70970d10096f0ddbe95d4'
    });

    client.sync({initial: true}).then(response => {
      fs.writeJsonSync(config.contentful.dataFile, response);
      content = response;
      callback();
    });
  }
});