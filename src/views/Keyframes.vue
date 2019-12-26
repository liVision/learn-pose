<template>
  <div class="center">
    <div class="pen">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
import { easing, keyframes, styler } from "popmotion"

export default {
  mounted () {
    const divStyler = styler(document.querySelector('.box'))

    keyframes({
      values: [
        { x: 0, y: 0, rotateY: 0, background: '#9B65DE' },
        { x: 300, y: 0, rotateY: 180, rotateX: 0, background: '#14D790' },
        { x: 300, y: 200, rotateY: 180, rotateX: 180, background: '#FF1C68' },
        { x: 0, y: 200, rotateY: 0, rotateX: 180, background: '#198FE3' },
        { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '#9B65DE' }
      ],
      duration: 3000,
      easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
      loop: Infinity
      // times: [0, 0.2, 0.5, 0.6, 1]
    }).start(divStyler.set)
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
  background: var(--pink);
}
</style>
