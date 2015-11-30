var ready;

ready = function() {
  var my_li, my_ul;
  my_li = document.createElement('li');
  my_li.innerHTML = 'Shiny, new li tag!';
  my_ul = document.getElementById('my_ul');
  return my_ul.appendChild(my_li);
};

document.addEventListener('DOMContentLoaded', ready, false);
