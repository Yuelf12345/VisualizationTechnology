<template>
  <div>
    <svg width="200" height="100">
      <rect ref="rect" x="0" y="0" width="150" height="50" fill="pink"></rect>
    </svg>
    <el-button @click="handleAmplify">放大</el-button>
    <svg width="800" height="600">
      <defs id="defs"></defs>
      <g stroke="plum" stroke-width="2">
        <!--x轴-->
        <line x1="50" y1="550" x2="750" y2="550"></line>
        <line x1="740" y1="540" x2="750" y2="550"></line>
        <line x1="740" y1="560" x2="750" y2="550"></line>
        <!--Y轴-->
        <line x1="50" y1="50" x2="50" y2="550"></line>
        <line x1="50" y1="50" x2="40" y2="60"></line>
        <line x1="50" y1="50" x2="60" y2="60"></line>
      </g>
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const rect = ref();
const sweat = ref();
const handleAmplify = () => {
  rect.value.setAttribute("x", 10);
  rect.value.setAttribute("width", 180);
  rect.value.setAttribute("height", 100);
  rect.value.setAttribute("fill", "orangered");
  sweat.value.style.transformOrigin = "center center";
  sweat.value.style.transform = "rotate(" + 200 + "deg)";
};
</script>