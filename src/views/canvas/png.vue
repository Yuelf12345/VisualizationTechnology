<template>
  <div>
    png
    <el-button @click="open">></el-button>
    <canvas ref="canvaspng" width="800" height="600"></canvas>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvaspng = ref();
var video:any
var ctx:any
onMounted(() => {
  ctx = canvaspng.value.getContext("2d");
  // const img = new Image();
  // img.src =
  //   "https://img2.baidu.com/it/u=3359649605,3626874592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=752";
  // img.onload = () => {
  //   // var pattern = ctx.createPattern(img, "repeat-y");
  //   // ctx.fillStyle = pattern;
  //   // ctx.fillRect(0, 0, 600, 500);
    
  //   // (图片,x,y,宽?,高?,裁剪)
  //   ctx.drawImage(img,100,300,200,200,0,0,200,200)
  // };


  //视频
  // video = document.createElement('video')
  // video.src = 'blob:https://www.douyin.com/1a9a48c1-40c6-4657-9f90-9c7eff11f84c'

  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(200, 200);
  // ctx.lineTo(300, 100);

  // ctx.lineWidth = 40;
  // // butt round square
  // ctx.lineCap = "round";
  // // 连接 mitter,round,bevel
  // ctx.lineJoin = "round";
  // // 斜截面限制
  // ctx.miterLimit = 5;

  // ctx.stroke();
  // ctx.closePath(); 

  // let index = 0;
  // const r = () => {
  //   ctx.clearRect(0, 0, 600, 600);
  //   index++;
  //   if (index > 100) {
  //     index = 0;
  //   }
  //   ctx.moveTo(150, 150);
  //   ctx.lineTo(300, 200);
  //   ctx.lineTo(450, 150);

  //   ctx.lineWidth = 2;
  //   // butt round square
  //   ctx.lineCap = "round";
  //   // 连接 mitter,round,bevel
  //   ctx.lineJoin = "round";
  //   // 斜截面限制
  //   ctx.miterLimit = 5;
  //   // 设置虚线
  //   ctx.setLineDash([40, 20]);
  //   ctx.lineDashOffset = index;
  //   ctx.stroke();
  //   requestAnimationFrame(r);
  // };
  // r();


  // 文字 ('xxx',x,y,maxW)
  ctx.font = "100px Microsoft YaHei"
  // start end left right center
  ctx.textAlign = 'center'  
  // top bottom middle
  ctx.textBaseline = 'middle'
  // 方向
  ctx.direction = 'rtl'
  // 预测文本宽度
  let text = ctx.measureText('hello')
    console.log(text);
    
  // ctx.fillText("hello canvas",200,300,400)
  ctx.strokeText("hello canvas !",200,300,400)
  ctx.arc(200,300,5,0,Math.PI * 2)
  ctx.fill()
});
const open = () =>{
  video.play()
  r()
}

const r = () =>{
  ctx.drawImage(video,0,0,600,400)
  requestAnimationFrame(r)
}
</script>

<style lang="scss" scoped>
</style>