# Create element

This requires a `ul#my_ul` tag on the page.

	ready = ->
		my_li = document.createElement 'li'
		my_li.innerHTML = 'Shiny, new li tag!'

		my_ul = document.getElementById 'my_ul'
		my_ul.appendChild my_li


	document.addEventListener 'DOMContentLoaded', ready, false
