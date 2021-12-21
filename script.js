window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

(function clock() {
  const hour = document.getElementById("hour"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec"),
    cincoM = new Audio('Meteor.mp3);
  (function loop() {
    requestAnimFrame(loop);
    draw();
  })();

  function draw() {
    var dateNOW = new Date();
    const dateSTART = new Date("Dec 20, 2021 22:14:06");    
    dateSTART.setMinutes(dateSTART.getMinutes() - 60);
    var dSeconds = Math.abs(dateNOW - dateSTART) / 1000;
    h = (dSeconds % 5400) / 60;
    m = dSeconds % 90;
    s = (m * 90);
    //console.log(Math.round(h)+":"+Math.round(m)+":"+Math.round(s));
    hour.style.webkitTransform = "rotate(" + (h * 4) + "deg)";
    min.style.webkitTransform = "rotate(" + (m * 4) + "deg)";
    //sec.style.webkitTransform = "rotate(" + (s*4) + "deg)";
    if (Math.round(h)==55 && Math.round(m) == 0 && Math.round(s) <= 1) cincoM.play();
    if (Math.round(m) == 0 && Math.round(s) <= 1) console.log(Math.round(h)+":"+Math.round(m)+":"+Math.round(s));
  }
})();
