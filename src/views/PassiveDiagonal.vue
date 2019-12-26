<template>
  <div class="center">
    <Box class="box" />
  </div>
</template>

<script>
import posed from "vue-pose"

export default {
  components: {
    Box: posed.div({
      draggable: 'x',
      passive: {
        y: ['x', v => v] // 对角线运动
        // y: ['x', v => v * Math.sin(v * 0.01)] // 三角函数运动
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
