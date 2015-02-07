$(function() {
  var my_value, my_value_id;
  my_value_id = 'my_text';
  my_value = localStorage.getItem(my_value_id);
  $('#my_input').val(my_value);
  return $('#my_button').click(function(e) {
    e.preventDefault();
    my_value = $('#my_input').val();
    return localStorage.setItem(my_value_id, my_value);
  });
});
