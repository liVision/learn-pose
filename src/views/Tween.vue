<template>
  <div class="center">
    <div class="pen">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
import { easing, tween, styler } from 'popmotion'

export default {
  mounted () {
    const divStyler = styler(document.querySelector(".box"))
    console.log(333, new Date().getTime())
    tween({
      from: 0,
      to: { x: 100 },
      duration: 1000,
      ease: easing.backOut,
      elapsed: 100,
      flip: 1
      // loop: 1
      // yoyo: 1
    }).start({
      update: v => {
        divStyler.set(v)
        console.log(111, v, new Date().getTime())
      },
      complete: () => {
        console.log(222, new Date().getTime())
      }
    })
    // playback.seek(1)
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
  background: var(--green);
}

</style>
