<template>
    <canvas id="canvas" ></canvas>
</template>
  
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { init } from "./RainDay.js";

let ctx: any = reactive({})

const initCanvas = () => {
    const canvas: any = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(ctx);
}

onMounted(() => {
    initCanvas()
})
</script>
  