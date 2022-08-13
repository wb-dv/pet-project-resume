export const normalize = () => {
  return app.gulp
    .src(app.path.src.normalize)
    .pipe(app.gulp.dest(app.path.build.normalize));
};
