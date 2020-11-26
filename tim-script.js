var url_string = document.URL;
var url = new URL(url_string);
var string = url.searchParams.get("userString");

var reversed = string.split("").reverse().join("");

document.getElementById("userString").value = reversed;
