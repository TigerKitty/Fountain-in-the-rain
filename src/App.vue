<template>
  <div class="debut">
    <MusicLongPlayer />
    <MusicCoverImage />
  </div>
</template>

<script setup lang="ts">
import MusicLongPlayer from './components/MusicLongPlayer.vue';
import MusicCoverImage from './components/MusicCoverImage.vue';
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}

.debut {
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-flex;
  background-color: #003152;
}
</style>