<template>
  <div class="center">
    <div class="pen">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
import { styler, spring, listen, pointer, value } from "popmotion"

export default {
  mounted () {
    const ball = document.querySelector(".box")
    const divStyler = styler(ball)
    const ballXY = value({ x: 0, y: 0 }, divStyler.set)

    listen(ball, "mousedown touchstart").start(e => {
      e.preventDefault()
      console.log(111, ballXY.get())
      pointer(ballXY.get()).start(ballXY)
    })

    listen(document, "mouseup touchend").start(() => {
      spring({
        from: ballXY.get(),
        velocity: ballXY.getVelocity(),
        to: { x: 0, y: 0 },
        stiffness: 200
        // mass: 1,
        // damping: 10
      }).start(ballXY)
    })
  }
}
</script>

<style scoped>
.center {
  --pink: #ff1c68;
  --green: #14d790;
  --blue: #198fe3;
  --black: #21282d;
  color: #222;
  font-family: "PT Sans", sans-serif;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.pen {
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  flex: 1 1 100%;
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
}
.box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--pink);
}
</style>
