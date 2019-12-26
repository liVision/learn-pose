<template>
  <Box class="box" v-on:press-start="log" v-on:press-end="log" />
</template>

<script>
import posed from 'vue-pose'

export default {
  methods: { log: console.log },
  components: {
    Box: posed.div({
      pressable: true,
      init: {
        x: '100px',
        y: '100px',
        scale: 1
      },
      press: { scale: 0.8 },
      pressEnd: { scale: 1.2 }
    })
  }
}
</script>
