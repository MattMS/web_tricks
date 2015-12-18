# Modules with Browserify

[Browserify](http://browserify.org/) is a tool for writing code in the
[Node.js](https://nodejs.org/) way (with `require()`)
and compiling it into a single file for the browser.


## Install Browserify

Insall Browserify globally:

	npm install -g browserify

You only need to do this once, rather than once in every project.


## Install Coffeeify

Since this code is written in Literate CoffeeScript, we need to use the Coffeeify module.

Install in the project folder:

	npm install coffeeify

Unlike Browserify, this needs to be done in each project folder.


## Install a minifier (optional)

If you have enough code to need multiple modules, then you probably want to minify it.

Install Uglify:

	npm install uglify-js

Usage is described in the following build section.


## Build module

Compile `main.coffee.md` and any required code into `main.js`:

	browserify --extension=coffee --extension=coffee.md --transform=coffeeify main.coffee.md > main.js

If you are using Uglify, then use the following command instead:

	browserify --extension=coffee --extension=coffee.md --transform=coffeeify main.coffee.md | uglifyjs -- > script.js
