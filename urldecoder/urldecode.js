textTool(function(val) {
    return decodeURI(val);
}, function(err) {
    alert("Error decoding url. Make sure the text you entered is a valid url.");
});
