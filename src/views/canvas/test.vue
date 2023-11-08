<template>
  <div>
    canvas
    <canvas ref="canvas" width="800" height="600"></canvas>
  </div>
</template>


<script setup lang="ts">
import { ref,onMounted } from "vue";
const canvas = ref();

onMounted(()=>{
  const ctx = canvas.value.getContext("2d");
  console.log('ctx',ctx);

// 矩形
  // ctx.strokeRect(0,0,300,300)
  // ctx.fillRect(0,0,300,300)

  // ctx.beginPath() 
  // ctx.rect(100,100,200,200)
  // ctx.stroke()
  // ctx.closePath()

  // ctx.beginPath()
  // ctx.rect(200,200,200,200)
  // ctx.fill()
  // ctx.closePath()

  // 圆
  // ctx.arc(300,200,50,Math.PI,Math.PI/2)
  // ctx.stroke()

  // 线段
  ctx.beginPath()
  ctx.moveTo(300,200) // 初始 宽高
  ctx.lineTo(350,10)  // 结束 宽高
  ctx.lineTo(350,100)  // 结束 宽高
  ctx.lineTo(300,200)  // 结束 宽高
  ctx.fill()
  ctx.closePath()


  // let height = 0;
  // let timer = setInterval(()=>{
  //   height++
  //   ctx.clearRect(0,0,canvas.value.clientWidth,height)
  //   if(height > canvas.value.clientHeight){
  //     clearInterval(timer)
  //   }
  // })

})
</script>

<style lang="sass" scoped>
</style>