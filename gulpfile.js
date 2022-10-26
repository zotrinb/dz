const { parallel, series, src } = require('gulp');

const { views, clean, server, styles, images, fonts, scripts, svgSprite } = require('./gulp/tasks');

const build = series(clean, parallel(views, styles, scripts, fonts, images, svgSprite));
const start = series(build, server);

const pug = () =>{
  return src('src/views/pages/index.pug')
}
module.exports = {
  start,
  build,
}
