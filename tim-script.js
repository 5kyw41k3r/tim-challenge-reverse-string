// Store the userString form data value in a variable
var url_string = document.URL;
var url = new URL(url_string);
var string = url.searchParams.get("userString");

// Reverse the string
var reversed = string.split("").reverse().join("");

// output reversed value to input box
document.getElementById("userString").value = reversed;
