<template>
  <canvas class="music-player-background" ref="background"></canvas>
  <div class="music-player">
    <img src="../assets/img/雨中泉水.png" class="music-long-player">
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { Scene } from './MusicLongPlayer'
let background: any = ref()
onMounted(() => {
  background.value.width = background.value.height = Math.ceil(background.value.parentNode.lastElementChild.offsetWidth * 1.68421);
  const scene = new Scene(background.value);
  scene.run();
})
</script>

<style lang='less' scoped>
@import '../assets/less/MusicLongPlayer.less';
</style>
