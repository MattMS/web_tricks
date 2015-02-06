# Save object in browser with PouchDB

jQuery makes it simpler to grab the page ready event and select items.

	$ ->

Creating a new PouchDB object with the same name will load it from the
browser storage.

		db = new PouchDB 'my_db'

The document ID has to be unique in the database.

		my_doc_id = 'my_text'

`db.get` requests the document with the given ID.

		db.get my_doc_id
		, (err, doc)->

This will receive a 404 error before you save a value because a document
with matching ID does not exist yet.

			if err
				console.error err

			else
				$ '#my_input'
				.val doc.my_value

Add a listener to the button to save the value when clicked.

		$ '#my_button'
		.click (e)->
			e.preventDefault()

			value = $ '#my_input'
			.val()

			doc =
				_id: my_doc_id
				my_value: value

`db.put` saves the document, replacing the current document with the
matching ID.

			db.put doc

			.catch (err)->
				console.error err

			.then (doc)->
				console.log 'JSON doc saved!'
