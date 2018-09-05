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

var easeInOutQuint = easeInOut(5); // https://github.com/CharlotteGore/functional-easing

var easeInSine = function easeInSine(t) {
  return -1 * Math.cos(t * Math.PI / 2) + 1;
};
var easeOutSine = function easeOutSine(t) {
  return Math.sin(t * Math.PI / 2);
};
var easeInOutSine = function easeInOutSine(t) {
  return (Math.cos(Math.PI * t) - 1) / -2;
}; // https://github.com/yuichiroharai/easeplus-velocity
// https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
// back

var generateEaseInBack = function generateEaseInBack(amount) {
  return function (t) {
    return t * t * ((amount + 1) * t - amount);
  };
};
var generateEaseOutBack = function generateEaseOutBack(amount) {
  return function (t) {
    return --t * t * ((amount + 1) * t + amount) + 1;
  };
};
var generateEaseInOutBack = function generateEaseInOutBack(amount) {
  return function (t) {
    return (t *= 2) < 1 ? 0.5 * (t * t * ((amount + 1) * t - amount)) : 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
  };
};
var easeInBack = generateEaseInBack(1.7);
var easeOutBack = generateEaseOutBack(1.7);
var easeInOutBack = generateEaseInOutBack(1.7 * 1.525); // elastic

function generateEaseInElastic(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function (t) {
    if (t === 0 || t === 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
  };
}
function generateEaseOutElastic(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function (t) {
    if (t === 0 || t === 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1;
  };
}
function generateEaseInOutElastic(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function (t) {
    var s = period / pi2 * Math.asin(1 / amplitude);
    return (t *= 2) < 1 ? -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period)) : amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
  };
}
var easeInElastic = generateEaseInElastic(1, 0.3);
var easeOutElastic = generateEaseOutElastic(1, 0.3);
var easeInOutElastic = generateEaseInOutElastic(1, 0.3 * 1.5); // bounce

var easeInBounce = function easeInBounce(t) {
  return 1 - easeOutBounce(1 - t);
};
var easeOutBounce = function easeOutBounce(t) {
  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
};
var easeInOutBounce = function easeInOutBounce(t) {
  return t < 0.5 ? easeInBounce(t * 2) * 0.5 : easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
};

export default createTransition;
export { createTransition, linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, generateEaseInBack, generateEaseOutBack, generateEaseInOutBack, easeInBack, easeOutBack, easeInOutBack, generateEaseInElastic, generateEaseOutElastic, generateEaseInOutElastic, easeInElastic, easeOutElastic, easeInOutElastic, easeInBounce, easeOutBounce, easeInOutBounce };
