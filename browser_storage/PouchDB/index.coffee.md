# Save object in browser with PouchDB

	$ ->
		db = new PouchDB 'my_db'

		my_doc_id = 'my_text'


		db.get my_doc_id
		, (err, doc)->
			if err
				console.error err

			else
				value = $ '#my_input'
				.val doc.my_value


		$ '#my_button'
		.click (e)->
			e.preventDefault()

			value = $ '#my_input'
			.val()

			doc =
				_id: my_doc_id
				my_value: value

			db.put doc

			.catch (err)->
				console.error err

			.then (doc)->
				console.log 'JSON doc saved!'
