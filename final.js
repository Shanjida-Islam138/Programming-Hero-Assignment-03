/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var share = area/2;
console.log(share);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
    console.log("Laptop");
} 
else if (money >= 10000) {
    console.log("Cycle");
} 
else {
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for (var i=1; i<=lastDay; i++) {
    if (i % 3 == 0) {
      console.log(i + " - medicine");
    }
    else {
      console.log(i + " - rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
var size = fileName.length;
var extension = "";
var result = "Delete";

if (fileName.charAt(0) == "#") {
  result = "Store";
}
else {
  var last4= fileName.substring(size - 4);
  var last5= fileName.substring(size - 5);

  if (last4 == ".pdf") {
    result = "Store";
  }
  else if (last5 == ".docx") {
    result = "Store";
  }
}
console.log(result);


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
console.log(student.name + student.roll + student.department + "@ph.ac.bd")



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var c_salary = startingSalary;
for (var i=1; i<=experience; i++) {
    c_salary += (c_salary * 0.05);
}
console.log(c_salary.toFixed(2));