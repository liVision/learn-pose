<template>
  <Box
    class="box"
    :on-value-change="{ x: log }"
    v-on:drag-start="log"
    v-on:drag-end="log"
  >
  {{a}}
  </Box>
</template>

<script>
import posed from 'vue-pose'

export default {
  data: () => ({
    a: 'hello'
  }),
  methods: { log: console.log },
  components: {
    Box: posed.div({ draggable: true })
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
