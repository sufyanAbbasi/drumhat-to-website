if (!!window.EventSource) {
  var source = new EventSource('stream.php');
} else {
  // Result to xhr polling :(
}

source.addEventListener('message', function(e) {
  console.log(e.data);
}, false);

source.addEventListener('hit', function(e){
  console.log(e.data + " hit.")
}, false)

source.addEventListener('release', function(e){
  console.log(e.data + " released.")
}, false)

source.addEventListener('open', function(e) {
  // Connection was opened.
}, false);

source.addEventListener('error', function(e) {
  if (e.readyState == EventSource.CLOSED) {
    // Connection was closed.
  }
}, false);
