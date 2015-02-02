gulp = require 'gulp'
coffee = require 'gulp-coffee'
jade = require 'gulp-jade'


gulp.task 'default', ['templates',]


gulp.task 'scripts', ->
	gulp.src './**/index.coffee.md'
		.pipe coffee bare: true
		.pipe gulp.dest '.'


gulp.task 'templates', ['scripts',], ->
	gulp.src './**/index.jade'
	.pipe jade pretty: true
	.pipe gulp.dest '.'
