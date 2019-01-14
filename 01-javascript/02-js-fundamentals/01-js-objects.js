// 30 minutes max

// 1.

function print_students(students) {
    for(let i = 0; i < students.length; i++) {
       console.log(students[i].name);
       console.log(students[i].cohort);
    }
 }
 
 // 2.
 
 function print_length(users) {
   console.log("EMPLOYEES");
   for(var i = 0; i < users.employees.length; i++) {
     var length = users.employees[i].last_name.length + users.employees[i].first_name.length;
     console.log(i + " - " + users.employees[i].last_name + ", " + users.employees[i].first_name + " - " + length);
   }
 
   console.log("MANAGERS");
   for(var j = 0; j < users.managers.length; j++) {
     var length = users.managers[j].last_name.length + users.managers[j].first_name.length;
     console.log(j + " - " + users.managers[j].last_name + ", " + users.managers[j].first_name + " - " + length);
   }
 }