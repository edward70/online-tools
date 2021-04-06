function textTool(action, errHandler) {
  window.onload = function() {
    document.getElementById("trigger").addEventListener('click', function() {
      var value = document.getElementById("data").value;
      try {
        var finished = action(value);
      } catch (err) {
        errHandler(err);
        return;
      }
      document.getElementById("out").value = finished;
      var result = document.getElementById("result");
      result.style.display = "block";
      result.style.animation = "fade .5s linear";
    });
  }
}
