var ready;

ready = function() {
  return alert('Page loaded');
};

if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', function(event) {
    return ready();
  }, false);
} else if (document.attachEvent) {
  document.attachEvent('onreadystatechange', function() {
    if ('complete' === document.readyState) {
      return ready();
    }
  });
}
