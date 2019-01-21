var _ = {
    map: function(num_array, transform) {
      //code here;
      for(index in num_array) {
          num_array[index] = transform(num_array[index]);
      }

      return num_array;
    },
    reduce: function(list, iteratee, memo) { 
      // code here;
      var total = memo;
      for(index in list) {
         total = iteratee(total, list[index]);
      }
      return total;
    },
    find: function(num_array, callback) { 
        for(index in num_array) {
          if(callback(num_array[index])) {
              return(num_array[index]);
          }
        }
  
        return undefined;
    },
    filter: function(num_array, callback) { 
      for(index in num_array) {
        if(!callback(num_array[index])) {
            num_array.splice(index,1);
        }
      }

      return num_array;
    },
    reject: function(num_array, callback) { 
        for(index in num_array) {
          if(callback(num_array[index])) {
              num_array.splice(index,1);
          }
        }
  
        return num_array;
    }
  }
