<template>
  <div class="center">
    <Input class="box" />
  </div>
</template>

<script>
import posed from "vue-pose"

export default {
  components: {
    Input: posed.input({
      focusable: true,
      init: {
        color: '#aaa',
        outlineWidth: '0px',
        outlineOffset: '0px',
        scale: 1
      },
      focus: {
        color: '#000',
        outlineWidth: '12px',
        outlineOffset: '5px',
        outlineColor: '#AB36FF',
        scale: 1.2
      }
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
  padding: 20px;
  border: 1px solid black;
}
</style>
