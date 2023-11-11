<template>
  <div ref="pixi" id="pixi"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Sprite, utils, Rectangle, Application, Text, Graphics } from "pixi.js";

const app = new Application({
  resizeTo: window,
  backgroundColor: 0x061639,
});
const pixi = ref();
onMounted(() => {
  const x = document.querySelector("#pixi");
  pixi.value.appendChild(app.view);

  const rect = new Graphics()
  rect.beginFill(0x66ccff)
  rect.drawRect(0,0,64,64)
  rect.endFill()

  app.stage.addChild(rect)
});
</script>