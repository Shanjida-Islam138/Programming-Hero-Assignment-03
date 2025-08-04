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