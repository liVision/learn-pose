<template>
  <div class="center">
    <div class="pen">
      <div class="carousel">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { styler, decay, listen, pointer, value } from "popmotion"

export default {
  mounted () {
    const slider = document.querySelector(".carousel")
    const divStyler = styler(slider)
    const sliderX = value(0, v => divStyler.set('x', v))

    listen(slider, "mousedown touchstart").start(e => {
      e.preventDefault()
      console.log(111, sliderX.get())
      pointer({ x: sliderX.get() })
        .pipe(({ x }) => x)
        .start(sliderX)
    })

    listen(document, "mouseup touchend").start(() => {
      decay({
        from: sliderX.get(),
        velocity: sliderX.getVelocity(),
        // power: 0.8,
        timeConstant: 700
        // restDelta: 0.5,
        // modifyTarget: v => v
      }).start(sliderX)
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
  --purple: #9b65de;
  color: #222;
  font-family: "PT Sans", sans-serif;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
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
.carousel {
  display: flex;
  align-items: stretch;
  height: 150px;
  position: relative;

  .item {
    background: var(--purple);
    border-radius: 5px;
    margin-right: 15px;
    flex: 0 0 110px;

    &:nth-child(4n + 2) {
      background: var(--green);
    }

    &:nth-child(4n + 3) {
      background: var(--pink);
    }

    &:nth-child(4n + 4) {
      background: var(--blue);
    }
  }
}
</style>
