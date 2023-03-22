<template>
    <div class="music-progress-lyric"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { formatMusicLyrics } from '../utils/FormatAxiosRes'
let lyricStr = `
[00:01.000] 作词 : 田口俊
[00:11.000] 作曲 : 林哲司
[00:28.000] 傘をさす腕を | 撑伞的手
[00:33.000] 何度も持ち替え | 不知左右交换了多少回
[00:36.000] まだ来ないあなた | 还未到来的你啊
[00:42.000] 探してみるけど | 我试着寻找
[00:48.000] 向こうの歩道には | 对面的步道上
[00:54.000] 家路急ぐ人だけ | 是急于归家的行人
[00:59.000] いつもなら この噴水を 囲む恋人達もいない | 一如往常围绕着这喷泉的恋人们 也不见踪迹
[01:10.000] 雫になりそう この雨にとかされ | 想成为那点点水滴 融入雨中
[01:21.000] あなたは 気付くかしら | 你是否注意到了哟
[01:26.000] 胸の中の | 那心中
[01:29.000] 小さな波紋 | 荡起的波纹
[01:48.000] 鮮やかな日々に 陰り落とすように | 为那鲜活灵动的日夜 祛除阴翳
[01:58.500] 雨が噴水を ぼかしてしまうの | 雨点也将喷泉 一 一 晕开
[02:08.500] あなたが来てくれたら 泣き出してしまいそう | 若你能到来 恐怕是要让我落泪
[02:20.000] わけも聞かないで あなたは | 不需问缘由 你也必定会
[02:24.500] 肩を抱いてくれるかしら | 给我一个拥抱吧
[02:31.000] 雫になりそう 冷たさに埋もれて | 想成为那点点水滴 被那冰凉沁入
[02:41.000] 早く来て 降り注ぐ 優しさの雨に変えてよ | 快些来吧 丝丝降下 化为那温柔的雨
[02:47.000] 優しさの雨に変えてよ | 化为那温柔的雨
[03:13.000] 雫になりそう この雨にとかされ | 想成为那点点水滴 融入雨中
[03:23.500] あなたは 気付くかしら 胸の中の 小さな波紋 | 你是否注意到了哟 那心中 荡起的波纹
[03:36.000] 雫になりそう 冷たさに埋もれて | 想成为那点点水滴 被那冰凉沁入
[03:45.000] 早く来て 降り注ぐ 優しさの雨に変えて | 快些来吧 丝丝降下 化为那温柔的雨
`

let playingMusic: any = formatMusicLyrics(lyricStr)
let currentLyric: string = playingMusic.lyric[0].lyric
let index: number = 0
let currentTime: number = playingMusic.lyric[0].time * 1000
// 定时器定时时长，即多久监听一次歌词是否要更新
let step: number = 50

onMounted(() => {
  // 设置keyframes
  const style = document.styleSheets[0];
  style.insertRule('@keyframes fade {from {opacity: 0.4}to {opacity: 1}}')
  // 通过定时器来控制歌词
  let lyricParent: any = document.getElementsByClassName('music-progress-lyric')[0]
  let lyricElement: any = null
  let interval = setInterval(() => {
    if (index === playingMusic.lyric.length) {
      clearInterval(interval)
    }
    if (currentTime === playingMusic.lyric[index].time * 1000) {
      if (lyricElement) {
        lyricParent.removeChild(lyricElement)
      }
      lyricElement = document.createElement('div')
      lyricElement.className = 'fade'
      lyricElement.innerHTML = currentLyric
      // 设置样式
      setStyle(lyricElement)
      lyricParent.appendChild(lyricElement)
      index += 1
      currentLyric = playingMusic.lyric[index].lyric
    }
    currentTime += step
  }, step);
})

const setStyle = (element: any) => {
  const fade = `
    animation-name: fade;
    animation-duration: 1.5s;
    position: absolute;
    top: 1000px;
    font-family:'Times New Roman', Times, serif;
    font-size: 30px;
    color: #DCE2F1;
  `
  element.style.cssText = fade;
}
</script>

<style>
@import '../assets/less/MusicLyric.less';
</style>