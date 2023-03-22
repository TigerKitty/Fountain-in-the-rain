<template>
  <div class="music-cover">
    <img src="../assets/img/雨中泉水.png" class="music-cover-image">
    <img src="../assets/img/lp.png" class="music-cover-lp">
    <div class="music-progress">
      <div class="music-progress-messsage">
        <span class="music-progress-name">DROPS</span>
        <img src="../assets/img/雨.png" class="music-progress-icon-rain" />
        <img src="../assets/img/雨伞.png" class="music-progress-icon-umbrella" />
      </div>
      <div class="music-progress-line"></div>
    </div>
    <!-- <MusicLyric /> -->
  </div>
</template>

<script setup lang='ts'>
// import MusicLyric from './MusicLyric.vue';
</script>

<style lang='less' scoped>
@import '../assets/less/MusicCoverImage.less';
</style>
