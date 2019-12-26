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
      draggable: true,
      hoverable: true,
      init: { scale: 1, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
      hover: { scale: 1.2, boxShadow: '0px 5px 10px rgba(0,0,0,0.2)' },
      drag: { scale: 1.1, boxShadow: '0px 2px 3px rgba(0,0,0,0.1)' }
    })
  }
}
</script>

<style scoped>
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
