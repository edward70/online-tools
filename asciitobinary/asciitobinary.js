function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

textTool(function(val) {
    return text2Binary(val);
}, function(err) {
    alert("Error converting text to binary. Make sure the text you entered is valid ascii.");
});
