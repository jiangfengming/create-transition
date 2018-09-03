# create-transition
Create transitions that CSS can't.

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
function gotoTop() {
  const y = window.scrollY
  createTransition.createTransition(300, t => window.scrollTo(0, y - t * y), createTransition.easeInOutQuad)
}

function gotoBottom() {
  const y = window.scrollY
  const d = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
  createTransition.createTransition(300, t => window.scrollTo(0, y + t * d), createTransition.easeInOutQuad)
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

### createTransition(animation, duration, easing = linear)

#### Params:
`animation`: Function. The animation function to run per frame. 
`duration`: Number. The number of milliseconds a transition animation should take to complete. 
`easing`: Function. A function that describes the value of a property given a percentage of completeness.  
https://joshondesign.com/2013/03/01/improvedEasingEquations
    `t`: a value between 0 and 1. 0 being the start of the animation, and 1 being the end.
