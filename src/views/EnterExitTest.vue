<template>
  <div class="center">
    <button v-on:click="isVisible = true">Open modal</button>
      <Shade v-on:click.native="isVisible = false" class="shade" v-if="isVisible" :pose="isVisible ? 'enter' : 'exit'">
        <Modal class="modal" />
      </Shade>
  </div>
</template>

<script>
import posed from "vue-pose"

export default {
  data: () => ({ isVisible: false }),
  components: {
    Shade: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        z: -1
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        z: -150
      }
    }),
    Modal: posed.div({
      enter: {
        opacity: 1,
        z: 0
      },
      exit: {
        opacity: 0,
        z: -100
      }
    })
  },
  methods: {
    log: function () {
      console.log(111)
    }
  }
}
</script>

<style scoped>
.center {
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-180deg, #a5ff36 0%, #09ca92 96%);
}

button {
  border: none;
  border-radius: 300px;
  color: #000;
  font-size: 18px;
  letter-spacing: -0.2px;
  cursor: pointer;
  padding: 10px 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  perspective: 500px;
  transform: translateZ(-1);
  /* width: 500px;
  height: 500px;
  background: red; */
}

.modal {
  width: 400px;
  height: 250px;
  background: white;
  border-radius: 10px;
}
</style>
