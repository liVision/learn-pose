<template>
  <div class="center">
    <Sidebar class="sidebar" :pose="isVisible ? 'visible': 'hidden'">
      <Item class="item" v-for="item in items" v-bind:key="item" />
    </Sidebar>
  </div>
</template>

<script>
import posed from 'vue-pose'
import { transform } from 'popmotion'
const { pipe, interpolate } = transform

export default {
  data: () => ({
    isVisible: false,
    items: [0, 1, 2, 3, 4]
  }),
  mounted () {
    setInterval(() => {
      this.isVisible = !this.isVisible
    }, 2000)
  },
  components: {
    Sidebar: posed.div({
      label: 'sidebar',
      visible: {
        x: 0,
        beforeChildren: true,
        staggerChildren: 30,
        transition: { duration: 1000 }
      },
      hidden: {
        x: '-100%',
        afterChildren: true
      }
    }),
    Item: posed.li({
      passive: {
        opacity: ['x', pipe(
          parseFloat,
          interpolate([-100, 0], [0, 1])
        ), 'sidebar']
      }
    })
  }
}
</script>

<style>
.center {
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  align-items: stretch;
}

.sidebar {
  background: #54e365;
  padding: 20px;
}

.item {
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 10px;
}
</style>
