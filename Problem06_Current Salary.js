/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var c_salary = startingSalary;
for (var i=1; i<=experience; i++) {
    c_salary += (c_salary * 0.05);
}
console.log(c_salary.toFixed(2));