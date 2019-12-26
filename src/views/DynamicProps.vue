<template>
  <div class="home">
    <div>
      <Item
        class="item"
        v-for="item in items"
        v-bind:key="item"
        v-bind:i="item"
        :pose="isVisible ? 'visible': 'hidden'"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import posed from "vue-pose"
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
    Item: posed.div({
      visible: {
        opacity: 1,
        delay: ({ i }) => i * 100
      },
      hidden: { opacity: 0 }
    })
  }
}
</script>

<style lang="scss" scoped>
  .item {
    width: 300px;
    height: 50px;
    border-radius: 5px;
    background: #54E365;
    margin-bottom: 10px;
  }
</style>
