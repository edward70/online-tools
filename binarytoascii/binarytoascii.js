// https://stackoverflow.com/questions/21354235/converting-binary-to-text-using-javascript
function binary2Ascii(str) {
  var newBin = str.split(" ");
  var binCode = [];

  for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
}

textTool(function(val) {
    return binary2Ascii(val);
}, function(err) {
    alert("Error converting binary to text. Make sure you entered valid binary.");
});
