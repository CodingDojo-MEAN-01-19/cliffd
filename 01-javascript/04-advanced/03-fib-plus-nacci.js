function fib() {
    // Some variables here
    var a;
    var b;
    var c = 1;

    function nacci() {
      if(b === undefined) {
         b = c;
         console.log(c);
      }
      else if(a === undefined) {
         a = b;
         console.log(c);
      }
      else {
          c = a + b;
          console.log(c);
          a = b;
          b = c;
      }
    }
    return nacci
  }

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"