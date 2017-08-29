var gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');
const fs = require('fs-extra');
const lunr = require('lunr');

const config = require('../../config');

gulp.task('build-search-index', ['contentful-data'], function(callback) {
  const indexDestination = path.join(config.dest, 'assets', 'search.idx.js');  

  const data = fs.readJsonSync(config.contentful.dataFile)
    .entries
    .filter(x => x.fields['slug'] !== undefined)
    .map(x => {
      return {
        title: x.fields.title.en,
        slug: `/${x.fields.slug.en}`,
        //description: x.fields.description.en,
        content: x.fields.content.en
      };
    });

  let idx = lunr(function() {
    this.ref('slug');
    this.field('title');
    //this.field('description');
    this.field('content');

    data.forEach(doc => {
      this.add(doc);
    });
  })

  if(!fs.existsSync(indexDestination)) {
    fs.createFileSync(indexDestination);
  }

  fs.writeFile(indexDestination, JSON.stringify(idx));
  callback();  
});
