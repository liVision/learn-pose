<template>
  <div>
    <Box class="box" />
    <div class="black-box"></div>
  </div>
</template>

<script>
import posed from "vue-pose"

export default {
  components: {
    Box: posed.div({
      draggable: 'x',
      dragBounds: {
        left: '-50%',
        right: '50%'
      }
    })
  }
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: #54E365;
}
.black-box {
  height: 300px;
  width: 300px;
  background: black;
}
</style>
