<template>
  <div>
    canvas
    <canvas ref="canvas" width="800" height="600"></canvas>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvas = ref();

onMounted(() => {
  const ctx = canvas.value.getContext("2d");
  console.log("ctx", ctx);

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
  // ctx.beginPath()
  // ctx.moveTo(300,200) // 初始 宽高
  // ctx.lineTo(350,10)  // 结束 宽高
  // ctx.lineTo(350,100)  // 结束 宽高
  // ctx.lineTo(300,200)  // 结束 宽高
  // ctx.fill()
  // ctx.closePath()

  // 圆弧  (x1,y1,x2,y2,r)
  // ctx.beginPath()
  // ctx.moveTo(300,200)
  // ctx.arcTo(300,250,250,250,25)
  // ctx.stroke()
  // ctx.closePath()

  // bezier (cp1,cp2,x,y) (cp1x,cp1y,cp2x,cp2y,x,y)
  // ctx.beginPath()
  // ctx.moveTo(200,300)
  // ctx.quadraticCurveTo(100,300,100,200)
  // ctx.quadraticCurveTo(100,100,200,100)
  // ctx.quadraticCurveTo(300,100,300,100)
  // ctx.quadraticCurveTo(400,100,400,200)
  // ctx.quadraticCurveTo(400,300,300,300)
  // ctx.quadraticCurveTo(300,300,250,300)
  // ctx.quadraticCurveTo(150,400,200,300)
  // ctx.stroke()
  // ctx.closePath()

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.bezierCurveTo(90, 130, 80, 280, 200, 350);
  ctx.moveTo(200, 200);
  ctx.bezierCurveTo(310, 130, 320, 280, 200, 350);
  ctx.stroke();

  // 阴影
  ctx.shadowOffsetX = 10
  ctx.shadowOffsetY = 10
  ctx.shadowBlur = 5
  ctx.shadowColor = 'pink'

  ctx.closePath();

  // let height = 0;
  // let timer = setInterval(()=>{
  //   height++
  //   ctx.clearRect(0,0,canvas.value.clientWidth,height)
  //   if(height > canvas.value.clientHeight){
  //     clearInterval(timer)
  //   }
  // })

  // 封装
  // var heartPath = new Path2D();
  // heartPath.moveTo(200, 200);
  // heartPath.bezierCurveTo(90, 130, 80, 280, 200, 350);
  // heartPath.moveTo(200, 200);
  // heartPath.bezierCurveTo(310, 130, 320, 280, 200, 350);

  // ctx.strokeStyle = "red";

  // ctx.stroke(heartPath);

  // 渐变

  // let linerGreadient = ctx.createLinearGradient(0,0,100,100)
  // linerGreadient.addColorStop(0,'red')
  // linerGreadient.addColorStop(1,'blue')
  // ctx.fillStyle = linerGreadient
  // ctx.fillRect(0, 0, 100, 100);

  // let index = 0;
  // const r = () => {
  //   ctx.clearRect(0, 0, 100, 100);
  //   index += 0.01;
  //   if (index > 1) {
  //     index = 0;
  //   }
  //   let linerGreadient = ctx.createLinearGradient(0, 0, 100, 100);
  //   linerGreadient.addColorStop(0, "red");
  //   linerGreadient.addColorStop(index, "white");
  //   linerGreadient.addColorStop(1, "blue");
  //   ctx.fillStyle = linerGreadient;
  //   ctx.fillRect(0, 0, 100, 100);
  //   requestAnimationFrame(r);
  // };
  // requestAnimationFrame(r);
  // (开始圆x坐标, 开始圆y坐标, 开始圆r半径, 结束圆x坐标, 结束圆y坐标, 结束圆r半径)
  let RadialGreadient = ctx.createRadialGradient(300, 50, 30, 300, 50, 50);
  RadialGreadient.addColorStop(0, "red");
  RadialGreadient.addColorStop(1, "blue");
  ctx.fillStyle = RadialGreadient;
  ctx.arc(300, 50, 50, 0, Math.PI * 2);
  ctx.fill();

  // createConicGradient(开始渐变角度，圆心X，圆心Y)
  // var coneGreadient = ctx.createConicGradient(Math.PI / 2, 250, 250);
  // coneGreadient.addColorStop(0, "blue");
  // coneGreadient.addColorStop(0.5, "yellow");
  // coneGreadient.addColorStop(1, "red");
  // ctx.fillStyle = coneGreadient;
  // ctx.arc(250, 250, 150, 0, Math.PI * 2);
  // ctx.fill();
});
</script>

<style lang="scss" scoped>
</style>