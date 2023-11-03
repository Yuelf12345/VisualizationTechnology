<template>
  <div
    id="dragDiv"
    style="
      background-color: #cd995f;
      margin-top: 10px;
      width: 100%;
      height: 90%;
    "
  >
    <el-button type="primary" @click="handleAdd" :icon="Plus" circle />
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
        @mousedown="handleTableMouseDown($event, table)"
        :x="table.x"
        :y="table.y"
        :width="table.tableWidth"
        :height="table.height"
        :class="{ select: mode == 'move' && currentId == table.id }"
      >
        <div
          class="card"
          :style="{
            background: colorList[index % 5],
            cursor: mode == 'move' ? 'grabbing' : 'grab',
          }"
        >
          <div class="card-text">{{ table.name }}</div>
        </div>
      </foreignObject>
    </svg>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { createId } from "../../utils/utils";
import { Plus } from "@element-plus/icons-vue";
// import gsap from "gsap";
// import Draggable from "gsap/Draggable";
// gsap.registerPlugin(Draggable);

const mode = ref<string>("normal");
interface Table {
  id: string;
  x: number;
  y: number;
  tableWidth: number;
  height: number;
  name: number | string;
}
const svg = ref();
const currentId = ref<string>("");
const currentTable = ref();
const colorList = ["#f45891", "#fbee9d", "#a9ef58", "#34add1", "#c97fe5"];
const tableList = ref<Array<Table>>([
  {
    id: "92f60992-294c-484b-ab95-ffb3c6e799d3",
    x: 0,
    y: 0,
    tableWidth: 200,
    height: 200,
    name: "表1",
  },
  {
    id: "a60c6af2-768c-4016-a530-4a0c5318caba",
    x: 240,
    y: 40,
    tableWidth: 200,
    height: 200,
    name: "表2",
  },
]);

const handleAdd = () => {
  tableList.value.push({
    id: createId(),
    x: Math.random() * 800,
    y: Math.random() * 400,
    tableWidth: 200,
    height: 200,
    name: `表${tableList.value.length+1}`,
  });
};
const handleMouseDown = (e: any) => {
  if (e.target.tagName == "svg") {
    mode.value = "drag";
    currentId.value = "";
  }
};
let layerX = 0;
let layerY = 0;
const handleTableMouseDown = (e: any, table: Table) => {
  layerX = e.layerX;
  layerY = e.layerY;
  if (e.target.tagName == "DIV") {
    mode.value = "move";
    currentId.value = table.id;
    currentTable.value = table;
  }
};
const handleMouseUp = () => {
  mode.value = "normal";
};
const handleMouseMove = (e: any) => {
  if (mode.value == "move") {
    let point = getSVGCursor(e);
    currentTable.value.x = point.x - layerX;
    currentTable.value.y = point.y - layerY;
  }
};
const getSVGCursor = ({ clientX, clientY }: any) => {
  let point = svg.value.createSVGPoint();
  point.x = clientX;
  point.y = clientY;
  return point.matrixTransform(svg.value.getScreenCTM().inverse());
};
</script>
<style lang="scss" scoped>
.select {
  border: 1px solid peru;
}

:root {
  --pink: #f45891;
  --yellow: #fbee9d;
  --green: #a9ef58;
  --blue: #34add1;
  --purple: #c97fe5;
}

* {
  margin: 0;
}

.card {
  position: absolute;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  padding: 10px;
  transform: rotateX(5deg);
  box-shadow: -1px 10px 5px -4px rgba(0, 0, 0, 0.012),
    inset 0 24px 30px -12px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-text {
  border-radius: 10px;
  color: #373c49;
  font-size: 18px;
  font-weight: 600;
  border: none;
  background: transparent;
  outline: none;
  text-align: center;
  resize: none;
  overflow: hidden;
  font-family: "Playpen Sans", cursive;
}

.card-text:focus {
  background-color: rgba(0, 0, 0, 0.1);
}

.card-text::placeholder {
  color: black;
  opacity: 30%;
}
</style>
