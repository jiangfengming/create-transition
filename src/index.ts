export type EasingFn = (t: number) => number;

export function createTransition(
  animate: (t: number) => void,
  duration: number,
  easing: EasingFn
): Promise<void> {
  return new Promise(resolve => {
    let start: number;

    function step(now: number) {
      if (!start) {
        start = now;
      }

      let t = (now - start) / duration;

      if (t > 1) {
        t = 1;
      }

      animate(easing ? easing(t) : t);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}

export default createTransition;

// https://gist.github.com/gre/1650294#gistcomment-1806616

const easeIn = (p: number): EasingFn => t => Math.pow(t, p);
const easeOut = (p: number): EasingFn => t => 1 - Math.abs(Math.pow(t - 1, p));
const easeInOut = (p: number): EasingFn => t => t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5;

export const linear: EasingFn = t => t;

// accelerating from zero velocity
export const easeInQuad = easeIn(2);

// decelerating to zero velocity
export const easeOutQuad = easeOut(2);

// acceleration until halfway, then deceleration
export const easeInOutQuad = easeInOut(2);

// accelerating from zero velocity
export const easeInCubic = easeIn(3);

// decelerating to zero velocity
export const easeOutCubic = easeOut(3);

// acceleration until halfway, then deceleration
export const easeInOutCubic = easeInOut(3);

// accelerating from zero velocity
export const easeInQuart = easeIn(4);

// decelerating to zero velocity
export const easeOutQuart = easeOut(4);

// acceleration until halfway, then deceleration
export const easeInOutQuart = easeInOut(4);

// accelerating from zero velocity
export const easeInQuint = easeIn(5);

// decelerating to zero velocity
export const easeOutQuint = easeOut(5);

// acceleration until halfway, then deceleration
export const easeInOutQuint = easeInOut(5);

// https://github.com/CharlotteGore/functional-easing
export const easeInSine: EasingFn = t => -1 * Math.cos(t * Math.PI / 2) + 1;

export const easeOutSine: EasingFn = t => Math.sin(t * Math.PI / 2);

export const easeInOutSine: EasingFn = t => (Math.cos(Math.PI * t) - 1) / -2;

// https://github.com/yuichiroharai/easeplus-velocity
// https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js

// back
export const generateEaseInBack = (amount: number): EasingFn => t => t * t * ((amount + 1) * t - amount);

export const generateEaseOutBack = (amount: number): EasingFn => t => --t * t * ((amount + 1) * t + amount) + 1;

export const generateEaseInOutBack = (amount: number): EasingFn => t =>
  (t *= 2) < 1
    ? 0.5 * (t * t * ((amount + 1) * t - amount))
    : 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);

export const easeInBack = generateEaseInBack(1.7);
export const easeOutBack = generateEaseOutBack(1.7);
export const easeInOutBack = generateEaseInOutBack(1.7 * 1.525);

// elastic
export function generateEaseInElastic(amplitude: number, period: number): EasingFn {
  const pi2 = Math.PI * 2;

  return t => {
    if (t === 0 || t === 1) {
      return t;
    }

    const s = period / pi2 * Math.asin(1 / amplitude);

    return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
  };
}

export function generateEaseOutElastic(amplitude: number, period: number): EasingFn {
  const pi2 = Math.PI * 2;

  return t => {
    if (t === 0 || t === 1) {
      return t;
    }

    const s = period / pi2 * Math.asin(1 / amplitude);

    return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1;
  };
}

export function generateEaseInOutElastic(amplitude: number, period: number): EasingFn {
  const pi2 = Math.PI * 2;

  return t => {
    const s = period / pi2 * Math.asin(1 / amplitude);

    return (t *= 2) < 1
      ? -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period))
      : amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
  };
}

export const easeInElastic = generateEaseInElastic(1, 0.3);
export const easeOutElastic = generateEaseOutElastic(1, 0.3);
export const easeInOutElastic = generateEaseInOutElastic(1, 0.3 * 1.5);

// bounce
export const easeInBounce: EasingFn = t => 1 - easeOutBounce(1 - t);

export const easeOutBounce: EasingFn = t => {
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

export const easeInOutBounce: EasingFn = t =>
  t < 0.5 ? easeInBounce(t * 2) * 0.5 : easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
