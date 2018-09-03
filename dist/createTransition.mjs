function createTransition(animate, duration, easing) {
  return new Promise(function (resolve) {
    var start;

    function step(now) {
      if (!start) start = now;
      var t = (now - start) / duration;
      if (t > 1) t = 1;
      animate(easing ? easing(t) : t);
      if (t < 1) requestAnimationFrame(step);else resolve();
    }

    requestAnimationFrame(step);
  });
}

var easeIn = function easeIn(p) {
  return function (t) {
    return Math.pow(t, p);
  };
};

var easeOut = function easeOut(p) {
  return function (t) {
    return 1 - Math.abs(Math.pow(t - 1, p));
  };
};

var easeInOut = function easeInOut(p) {
  return function (t) {
    return t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5;
  };
};

var linear = function linear(t) {
  return t;
}; // accelerating from zero velocity

var easeInQuad = easeIn(2); // decelerating to zero velocity

var easeOutQuad = easeOut(2); // acceleration until halfway, then deceleration

var easeInOutQuad = easeInOut(2); // accelerating from zero velocity

var easeInCubic = easeIn(3); // decelerating to zero velocity

var easeOutCubic = easeOut(3); // acceleration until halfway, then deceleration

var easeInOutCubic = easeInOut(3); // accelerating from zero velocity

var easeInQuart = easeIn(4); // decelerating to zero velocity

var easeOutQuart = easeOut(4); // acceleration until halfway, then deceleration

var easeInOutQuart = easeInOut(4); // accelerating from zero velocity

var easeInQuint = easeIn(5); // decelerating to zero velocity

var easeOutQuint = easeOut(5); // acceleration until halfway, then deceleration

var easeInOutQuint = easeInOut(5); // https://gist.github.com/gre/1650294#gistcomment-840635
// elastic bounce effect at the beginning

var easeInElastic = function easeInElastic(t) {
  return (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
}; // elastic bounce effect at the end

var easeOutElastic = function easeOutElastic(t) {
  return 0.04 * t / --t * Math.sin(25 * t);
}; // elastic bounce effect at the beginning and end

var easeInOutElastic = function easeInOutElastic(t) {
  return (t -= 0.5) < 0 ? (0.02 + 0.01 / t) * Math.sin(50 * t) : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1;
}; // https://gist.github.com/gre/1650294#gistcomment-840635

var easeInSin = function easeInSin(t) {
  return 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2);
};
var easeOutSin = function easeOutSin(t) {
  return Math.sin(Math.PI / 2 * t);
};
var easeInOutSin = function easeInOutSin(t) {
  return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
};

export default createTransition;
export { createTransition, linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInElastic, easeOutElastic, easeInOutElastic, easeInSin, easeOutSin, easeInOutSin };
