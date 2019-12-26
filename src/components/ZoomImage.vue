<template>
  <div
    v-bind:style="{ width: imageWidth + 'px', height: imageHeight + 'px' }"
    v-on:click="toggleZoom"
  >
    <Frame :pose="pose" class="frame" />
    <ZoomImage :pose="pose" :src="src"/>
  </div>
</template>

<script>
import posed from "vue-pose"

export default {
  props: ["imageWidth", "imageHeight", "src"],
  data: () => ({
    isZoomed: false
  }),
  methods: {
    zoomIn () {
      window.addEventListener('scroll', this.zoomOut)
      this.isZoomed = true
    },
    zoomOut () {
      window.removeEventListener('scroll', this.zoomOut)
      this.isZoomed = false
    }
  },
  components: {
    ZoomImage: posed.img({
      zoomedOut: {
        position: "static",
        width: "auto",
        height: "auto",
        flip: true,
        transition: {
          duration: 400,
          ease: [0.08, 0.69, 0.2, 0.99]
        }
      },
      zoomedIn: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flip: true,
        transition: {
          duration: 400,
          ease: [0.08, 0.69, 0.2, 0.99]
        }
      }
    }),
    Frame: posed.div({
      zoomedIn: {
        applyAtStart: { display: 'block' },
        opacity: 1
      },
      zoomedOut: {
        applyAtEnd: { display: 'none' },
        opacity: 0
      }
    })
  },
  computed: {
    pose () {
      return this.isZoomed ? "zoomedIn" : "zoomedOut"
    },
    toggleZoom () {
      return this.isZoomed ? this.zoomOut : this.zoomIn
    }
  }
}
</script>

<style>
img {
  display: block;
  max-width: 100%;
  margin: auto;
}
.frame {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: white;
  transform: translateZ(0);
}
</style>
