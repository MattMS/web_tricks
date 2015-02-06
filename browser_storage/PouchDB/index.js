$(function() {
  var db, my_doc_id;
  db = new PouchDB('my_db');
  my_doc_id = 'my_text';
  db.get(my_doc_id, function(err, doc) {
    var value;
    if (err) {
      return console.error(err);
    } else {
      return value = $('#my_input').val(doc.my_value);
    }
  });
  return $('#my_button').click(function(e) {
    var doc, value;
    e.preventDefault();
    value = $('#my_input').val();
    doc = {
      _id: my_doc_id,
      my_value: value
    };
    return db.put(doc)["catch"](function(err) {
      return console.error(err);
    }).then(function(doc) {
      return console.log('JSON doc saved!');
    });
  });
});
