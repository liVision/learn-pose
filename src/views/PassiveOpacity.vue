<template>
  <div class="center">
    <Box class="box" />
  </div>
</template>

<script>
import posed from "vue-pose"
import { transform } from 'popmotion'
const { interpolate } = transform

export default {
  components: {
    Box: posed.div({
      draggable: 'x',
      passive: {
        opacity: ['x', interpolate(
          [-200, -100, 100, 200],
          [0, 1, 1, 0]
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
