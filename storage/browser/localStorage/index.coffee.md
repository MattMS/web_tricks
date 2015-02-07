# Save object in browser with localStorage

jQuery makes it simpler to grab the page ready event and select items.

	$ ->
		my_value_id = 'my_text'

		my_value = localStorage.getItem my_value_id

		$ '#my_input'
		.val my_value

Add a listener to the button to save the value when clicked.

		$ '#my_button'
		.click (e)->
			e.preventDefault()

			my_value = $ '#my_input'
			.val()

			localStorage.setItem my_value_id, my_value


## Useful links

- [localStorage on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window.localStorage)

- [Storage on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
