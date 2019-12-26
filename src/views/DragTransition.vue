<template>
  <Box class="box" />
</template>

<script>
import posed from "vue-pose"

export default {
  methods: { log: console.log },
  components: {
    Box: posed.div({
      draggable: true,
      init: {
        x: '100px',
        y: '100px',
        scale: 1
      },
      drag: { scale: 1.2 },
      dragEnd: {
        x: '100px',
        y: '100px',
        transition: { type: 'spring' }
      }
    })
  }
}
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background: #54E365;
}
</style>
