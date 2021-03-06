<template>
  <div class="center">
    <div class="pen">
      <div class="area">
        <div class="ball">Tap</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  physics,
  spring,
  tween,
  styler,
  listen,
  value
} from "popmotion"

export default {
  mounted () {
    const ball = document.querySelector(".ball")
    const ballStyler = styler(ball)
    const ballY = value(0, v => ballStyler.set("y", Math.min(0, v)))
    const ballScale = value(1, v => {
      ballStyler.set("scaleX", 1 + (1 - v))
      ballStyler.set("scaleY", v)
    })
    let count = 0
    let isFalling = false

    const ballBorder = value(
      {
        borderColor: "",
        borderWidth: 0
      },
      ({ borderColor, borderWidth }) =>
        ballStyler.set({
          boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
        })
    )

    const checkBounce = () => {
      if (!isFalling || ballY.get() < 0) return

      isFalling = false
      const impactVelocity = ballY.getVelocity()
      const compression = spring({
        to: 1,
        from: 1,
        velocity: -impactVelocity * 0.01,
        stiffness: 800
      })
        .pipe(s => {
          if (s >= 1) {
            s = 1
            compression.stop()

            if (impactVelocity > 20) {
              isFalling = true
              gravity.set(0).setVelocity(-impactVelocity * 0.5)
            }
          }
          return s
        })
        .start(ballScale)
    }

    const checkFail = () => {
      if (
        ballY.get() >= 0 &&
        ballY.getVelocity() !== 0 &&
        ball.innerHTML !== "Tap"
      ) {
        count = 0
        tween({
          from: { borderWidth: 0, borderColor: "rgb(255, 28, 104, 1)" },
          to: { borderWidth: 30, borderColor: "rgb(255, 28, 104, 0)" }
        }).start(ballBorder)

        ball.innerHTML = "Tap"
      }
    }

    const gravity = physics({
      acceleration: 2500,
      restSpeed: false
    }).start(v => {
      ballY.update(v)
      checkBounce(v)
      checkFail(v)
    })

    listen(ball, "mousedown touchstart").start(e => {
      e.preventDefault()
      count++
      ball.innerHTML = count

      isFalling = true
      ballScale.stop()
      ballScale.update(1)

      gravity.set(Math.min(0, ballY.get())).setVelocity(-1200)

      tween({
        from: { borderWidth: 0, borderColor: "rgb(20, 215, 144, 1)" },
        to: { borderWidth: 30, borderColor: "rgb(20, 215, 144, 0)" }
      }).start(ballBorder)
    })
  }
}
</script>

<style lang="scss" scoped>
.center {
  --pink: #ff1c68;
  --green: #14d790;
  --blue: #198fe3;
  --black: #21282d;
  --purple: #9B65DE;
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
.ball {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  transform-origin: 50% 100%;
  cursor: pointer;
}

.area {
  width: 300px;
  height: 300px;
  border-bottom: 3px solid var(--pink);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
</style>
