<template>
  <div class="about">
    <div>
      <Sidebar class="sidebar" :pose="isVisible ? 'visible': 'hidden'">
        <Item class="item" v-for="item in items" v-bind:key="item" />
      </Sidebar>
    </div>
  </div>
</template>

<script>
import posed from 'vue-pose'

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
      visible: {
        x: 0,
        beforeChildren: true, // 子组件之前执行显示动画
        staggerChildren: 30 // 子组件之间交错动画（第二个子组件在第一个子组件执行动画30ms后执行，第三个组件在第二个子组件执行动画30ms后执行）
        // staggerDirection: -1 // 指定子组件执行动画顺序（1：first to last， -1： last to first）
      },
      hidden: {
        x: '-100%',
        afterChildren: true // 子组件之后执行隐藏动画
      }
    }),
    Item: posed.div({
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 }
    })
  }
}
</script>

<style scoped>
.about {
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
