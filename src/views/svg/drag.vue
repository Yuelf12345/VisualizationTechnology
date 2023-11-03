<template>
  <div
    id="dragDiv"
    style="background-color: #eee; margin-top: 10px; width: 100%; height: 90%"
  >
    <el-input v-model="x" />
    <el-input v-model="y" />
    <svg
      ref="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      id="outbox"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
    >
      <foreignObject
        v-for="(table, index) in tableList"
        :key="index"
        @mousedown="handleTableMouseDown"
        :x="table.x"
        :y="table.y"
        :width="table.tableWidth"
        :height="table.height"
        :class="{ select: mode == 'move' }"
      >
        <div>{{ mode }}</div>
      </foreignObject>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const x = ref();
const y = ref();
const tableWidth = ref(20);
const height = ref(20);
const mode = ref<string>("normal");
interface Table {
  x: number;
  y: number;
  tableWidth: number;
  height: number;
  name: number | string;
}
const svg = ref();
const table = ref<Table>({
  x: 0,
  y: 0,
  tableWidth: 20,
  height: 20,
  name: "表1",
});
const tableList = ref<Array<Table>>([
  {
    x: 0,
    y: 0,
    tableWidth: 40,
    height: 20,
    name: "表1",
  },
  {
    x: 40,
    y: 40,
    tableWidth: 40,
    height: 20,
    name: "表2",
  },
]);
const handleMouseDown = (e: any) => {
  if (e.target.tagName == "svg") {
    mode.value = "drag";
  }
};
const handleTableMouseDown = (e: any) => {
  if (e.target.tagName == "DIV") {
    mode.value = "move";
  }
};
const handleMouseUp = (e: any) => {
  console.log("up", e.target.tagName);
  mode.value = "normal";
};
const handleMouseMove = (e: any) => {
  if (mode.value == "move") {
    console.log("move", e.target.tagName);
    getSVGCursor(e);

    
  }
};

const getSVGCursor = ({ clientX, clientY }) => {
  // let point = svg.value.current.createSVGPoint();
  console.log(svg.value.current);
  
  // point.x = clientX;
  // point.y = clientY;
  // return point.matrixTransform(svg.value.current.getScreenCTM().inverse());
};
</script>
<style lang="scss" scoped>
.select {
  border: 1px solid peru;
}
</style>
