// https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}

textTool(function(val) {
    return b64DecodeUnicode(val);
}, function(err) {
    alert("Error decoding Base64. Make sure the text you entered is a valid base64 value.");
});
