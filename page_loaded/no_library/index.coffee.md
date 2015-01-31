# Show alert when page has loaded

	ready = ->
		alert 'Page loaded'

For most browsers:

	if document.addEventListener
		document.addEventListener 'DOMContentLoaded', (event)->
			ready()
		, false

And for Internet Explorer:

	else if document.attachEvent
		document.attachEvent 'onreadystatechange', ->
			if 'complete' == document.readyState
				ready()

Taken from: http://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
