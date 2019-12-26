<template>
  <div class="center">
    <Box
      class="box"
      :pose="isFullscreen ? 'fullscreen' : 'thumbnail'"
      v-on:click.native="isFullscreen = !isFullscreen"
    />
  </div>
</template>

<script>
import posed from "vue-pose"

export default {
  data: () => ({ isFullscreen: false }),
  components: {
    Box: posed.div({
      fullscreen: {
        width: '100vw',
        height: '100vh',
        transition: { duration: 400 },
        flip: true
      },
      thumbnail: {
        width: 100,
        height: 100,
        transition: { duration: 500 },
        flip: true
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
