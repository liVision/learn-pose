<template>
  <div class="center">
    <Box class="box" />
  </div>
</template>

<script>
import posed from "vue-pose"
import { transform } from 'popmotion'
const { pipe, clamp, interpolate, blendColor } = transform

export default {
  components: {
    Box: posed.div({
      draggable: 'x',
      passive: {
        backgroundColor: ['x', pipe(
          interpolate([-200, 200], [0, 1]),
          clamp(0, 1),
          blendColor('#FF1C68', '#198FE3')
        )]
      }
    })
  }
}
</script>

<style>
.center {
  display: flex;
  height: 95vh;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.box {
  width: 100px;
  height: 100px;
  background: #54E365;
}
</style>
