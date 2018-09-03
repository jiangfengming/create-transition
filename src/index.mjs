export function createTransition(animate, duration, easing) {
  return new Promise(resolve => {
    let start

    function step(now) {
      if (!start) start = now
      let t = (now - start) / duration
      if (t > 1) t = 1
      animate(easing ? easing(t) : t)
      if (t < 1) requestAnimationFrame(step)
      else resolve()
    }

    requestAnimationFrame(step)
  })
}

export default createTransition

// https://gist.github.com/gre/1650294#gistcomment-1806616

const easeIn = p => t => Math.pow(t, p)
const easeOut = p => t => 1 - Math.abs(Math.pow(t - 1, p))
const easeInOut = p => t => t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5

export const linear = t => t

// accelerating from zero velocity
export const easeInQuad = easeIn(2)

// decelerating to zero velocity
export const easeOutQuad = easeOut(2)

// acceleration until halfway, then deceleration
export const easeInOutQuad = easeInOut(2)

// accelerating from zero velocity
export const easeInCubic = easeIn(3)

// decelerating to zero velocity
export const easeOutCubic = easeOut(3)

// acceleration until halfway, then deceleration
export const easeInOutCubic = easeInOut(3)

// accelerating from zero velocity
export const easeInQuart = easeIn(4)

// decelerating to zero velocity
export const easeOutQuart = easeOut(4)

// acceleration until halfway, then deceleration
export const easeInOutQuart = easeInOut(4)

// accelerating from zero velocity
export const easeInQuint = easeIn(5)

// decelerating to zero velocity
export const easeOutQuint = easeOut(5)

// acceleration until halfway, then deceleration
export const easeInOutQuint = easeInOut(5)

// https://gist.github.com/gre/1650294#gistcomment-840635

// elastic bounce effect at the beginning
export const easeInElastic = t => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1

// elastic bounce effect at the end
export const easeOutElastic = t => 0.04 * t / --t * Math.sin(25 * t)

// elastic bounce effect at the beginning and end
export const easeInOutElastic = t => (t -= 0.5) < 0 ? (0.02 + 0.01 / t) * Math.sin(50 * t) : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1

// https://gist.github.com/gre/1650294#gistcomment-840635

export const easeInSin = t => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2)

export const easeOutSin = t => Math.sin(Math.PI / 2 * t)

export const easeInOutSin = t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
