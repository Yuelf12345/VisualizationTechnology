<template>
  <div>
    <!-- <p>{{ Math.random() > 0.3 ? "谢谢惠顾" : "恭喜你,中了兰博基尼" }}</p> -->
    <canvas
      ref="canvasAni"
      width="600"
      height="400"
      @mousedown="handleDown"
      @mouseup="handleUp"
      @mousemove="handleMove"
    ></canvas>
    <el-slider v-model="width" max="20" />
    <el-color-picker v-model="color" />
    <button @click="handleBack">橡皮擦</button>
    <button @click="handleClear">清空</button>
    <button @click="handleSave">save</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvasAni = ref();
let img = new Image();
let ctx: any;
img.crossOrigin = "anonymous";
img.src =
  "https://img2.baidu.com/it/u=3359649605,3626874592&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=752";

let width = ref();
let color = ref();
onMounted(() => {
  ctx = canvasAni.value.getContext("2d");
  //   ctx.arc(300, 300, 50, 0, Math.PI * 2);
  //   ctx.stroke();

  //   ctx.translate(50,50)
  //   ctx.scale(2,2)
  //   ctx.rotate(Math.PI / 6)

  //   ctx.transform(1, 0, 0, 1, 50, 50);
  //   ctx.fillStyle = "red";
  //   ctx.fillRect(50, 50, 50, 50);
  //   // 颜色混合模式
  //   ctx.globalCompositeOperation = "source-in";
  //   ctx.fillStyle = "blue";
  //   ctx.fillRect(90, 60, 50, 50);

  //   ctx.drawImage(img, 0, 0, 600, 400);

  // 画笔状态
  //   ctx.fillStyle = "red";
  //   ctx.fillRect(50, 50, 50, 50);
  //   ctx.save();
  //   ctx.fillStyle = "yellow";
  //   ctx.fillRect(100, 100, 50, 50);
  //   ctx.save();
  //   ctx.fillStyle = "green";
  //   ctx.fillRect(150, 150, 50, 50);

  //   ctx.restore()
  //   ctx.fillRect(200, 200, 50, 50);
  //   ctx.restore()
  //   ctx.fillRect(250, 250, 50, 50);

  // 像素操作
  //   let data = ctx.getImageData(0, 0, 600, 400);
  //   let len = data.data.length;
  //   for (let i = 0; i < len; i += 4) {
  //     let avg = (data.data[i] + data.data[i + 1] + data.data[i + 2]) / 3;
  //     data.data[i] = avg;
  //     data.data[i + 1] = avg;
  //     data.data[i + 2] = avg;
  //     data.data[i + 3] = 255;
  //   }
  //   ctx.putImageData(data, 0, 0);

  const r = () => {
    ctx.clearRect(0, 0, 600, 400);
    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate(-Math.PI / 2);
    ctx.save();
    for (let i = 0; i <= 12; i++) {
      ctx.beginPath();
      ctx.moveTo(80, 0);
      ctx.lineTo(100, 0);
      ctx.lineWidth = 6;
      ctx.strokeStyle = "gray";
      ctx.stroke();
      ctx.rotate((Math.PI * 2) / 12);
      ctx.closePath();
    }
    ctx.restore();
    ctx.save();
    for (let i = 0; i <= 60; i++) {
      ctx.beginPath();
      ctx.moveTo(90, 0);
      ctx.lineTo(100, 0);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "gray";
      ctx.stroke();
      ctx.rotate((Math.PI * 2) / 60);
      ctx.closePath();
    }
    ctx.restore();

    ctx.save();
    let time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds());
    ctx.beginPath();
    ctx.moveTo(-15, 0);
    ctx.lineTo(90, 0);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.save();

    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getMinutes() +
        ((Math.PI * 2) / 60 / 60) * time.getSeconds()
    );
    ctx.beginPath();
    ctx.moveTo(-15, 0);
    ctx.lineTo(60, 0);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#666";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.save();

    ctx.rotate(
      ((2 * Math.PI) / 12) * time.getHours() +
        ((Math.PI * 2) / 12 / 60) * time.getMinutes() +
        ((Math.PI * 2) / 12 / 60) * time.getSeconds()
    );
    ctx.beginPath();
    ctx.moveTo(-15, 0);
    ctx.lineTo(30, 0);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#999";
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
    ctx.restore();
    requestAnimationFrame(r);
  };
  r();
});
let isDraw = false;
const handleDown = (e: any) => {
  isDraw = true;
  ctx.beginPath();
  let x = e.offsetX;
  let y = e.offsetY;
  ctx.moveTo(x, y);
};
const handleUp = () => {
  isDraw = false;
  ctx.closePath();
};
const handleMove = (e: any) => {
  if (isDraw) {
    // let x = e.offsetX;
    // let y = e.offsetY;
    // ctx.globalCompositeOperation = "destination-out";
    // ctx.arc(x, y, 20, 0, Math.PI * 2);
    // ctx.fill();

    let x = e.offsetX;
    let y = e.offsetY;

    ctx.lineWidth = width.value;
    ctx.strokeStyle = color.value;
    ctx.lineJoin = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};
console.log(isDraw);
let c = false;
const handleBack = () => {
  c = !c;
  if (c) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 30;
  } else {
    ctx.globalCompositeOperation = "source-over";
    ctx.lineWidth = width.value;
  }
};
const handleClear = () => {
  ctx.clearRect(0, 0, 600, 400);
};
const handleSave = () => {
  let url = canvasAni.value.toDataURL();
  let a = document.createElement("a");
  a.setAttribute("download", "签名");
  a.href = url;
  a.click();
};
</script>

<style scoped lang="scss">
p {
  position: fixed;
  top: 200px;
  left: 400px;
  font-size: 20px;
  z-index: -1;
}
canvas {
  border: 1px solid black;
}
</style>