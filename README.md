# create-transition
Create transition animations that CSS can't.

## Usage

Scroll animation:
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>example</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="../dist/createTransition.js"></script>
<script>
const { createTransition: transition, easeInOutQuad } = createTransition

function gotoTop() {
  const y = window.scrollY
  transition(t => window.scrollTo(0, y - t * y), 300, easeInOutQuad)
}

function gotoBottom() {
  const y = window.scrollY
  const d = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
  transition(t => window.scrollTo(0, y + t * d), 300, easeInOutQuad)
}
</script>
<style>
body {
  height: 9999px;
  background-image: linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5));
}

.nav {
  position: fixed;
  top: 10px;
  left: 10px;
}
</style>
</head>
<body>
<div class="nav">
  <button onclick="gotoTop()">go to top</button>
  <button onclick="gotoBottom()">go to bottom</button>
</div>
</body>
</html>
```

## Import

```js
import { createTransition, easeInOutQuad } from 'create-transition'
```

## APIs

### createTransition(animate, duration, easing = linear)

#### Params:

`animate(o)`  
Function. The animation function to run per frame. `o` is the eased value computed by `easing(t)`.

`duration`  
Number. The number of milliseconds a transition animation should take to complete.

`easing(t)`  
Function. A mathematical function that describes how fast one-dimensional values change during animations.
This lets you vary the animation's speed over the course of its duration. See more about easing functions:
[`<timing-function>`](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function) and
[Improved Easing Functions](https://joshondesign.com/2013/03/01/improvedEasingEquations)

`t`: Number. `t = (currentTime - startTime) / duration`. It represents the percentage of completeness of the transition.
It's value is between 0 and 1.

The return value is the eased value of `t`. `0.0` represents the initial state, and `1.0` represents the final state.
Depending on the specific function used, the calculated output can sometimes grow to be greater than 1.0 or smaller
than 0.0 during the course of an animation. This causes the animation to go farther than the final state, and then
return. For some properties, such as left or right, this creates a kind of "bouncing" effect.

Example easing function:
```js
function easeInQuad(t) {
  return t * t
}
```

You can create easing functions using [bezier-easing](https://github.com/gre/bezier-easing).


### generateEaseInBack(amount)
Generates an easeInBack function with custom `amount`.

### generateEaseOutBack(amount)
Generates an easeOutBack function with custom `amount`.

### generateEaseInOutBack(amount)
Generates an easeInOutBack function with custom `amount`.

### generateEaseInElastic(amplitude, period)
Generates an easeInElastic function with custom `amplitude` and `period`.

### generateEaseOutElastic(amplitude, period)
Generates an easeOutElastic function with custom `amplitude` and `period`.

### generateEaseInOutElastic(amplitude, period)
Generates an easeInOutElastic function with custom `amplitude` and `period`.

### Preset easing functions
* easeInQuad
* easeOutQuad
* easeInOutQuad
* easeInCubic
* easeOutCubic
* easeInOutCubic
* easeInQuart
* easeOutQuart
* easeInOutQuart
* easeInQuint
* easeOutQuint
* easeInOutQuint
* easeInSine
* easeOutSine
* easeInOutSine
* easeInBack (shortcut of `generateEaseInBack(1.7)`)
* easeOutBack (shortcut of `generateEaseOutBack(1.7)`)
* easeInOutBack (shortcut of `generateEaseInOutBack(1.7 * 1.525)`)
* easeInElastic (shortcut of `generateEaseInElastic(1, 0.3)`)
* easeOutElastic (shortcut of `generateEaseOutElastic(1, 0.3)`)
* easeInOutElastic (shortcut of `generateEaseInOutElastic(1, 0.3 * 1.5)`)
* easeInBounce
* easeOutBounce
* easeInOutBounce 
