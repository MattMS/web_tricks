gulp = require 'gulp'
coffee = require 'gulp-coffee'
jade = require 'gulp-jade'
uglify = require 'gulp-uglify'


gulp.task 'default', ['templates',]


gulp.task 'scripts', ->
	gulp.src './**/index.coffee.md'
		.pipe coffee bare: true
		.pipe uglify()
		.pipe gulp.dest '.'


gulp.task 'templates', ['scripts',], ->
	gulp.src './**/index.jade'
	.pipe jade()
	.pipe gulp.dest '.'
