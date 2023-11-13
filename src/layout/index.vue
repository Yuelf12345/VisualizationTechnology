<template>
  <div class="common-layout">
    <el-container>
      <el-header class="layout-header">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="layout-menu"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <el-menu-item index="/page1">item one</el-menu-item>
            <el-menu-item index="/page2">item two</el-menu-item>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>SVG</span>
              </template>
                <el-menu-item index="/svg">svg</el-menu-item>
                <el-menu-item index="/svgDrag">svgDrag</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><location /></el-icon>
                <span>CANVAS</span>
              </template>
                <el-menu-item index="/canvas">test</el-menu-item>
                <el-menu-item index="/png">png</el-menu-item>
                <el-menu-item index="/ani">ani</el-menu-item>
                <el-menu-item index="/pixi">pixi</el-menu-item>
                <el-menu-item index="/dw">dw</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main class="layout-main"
          >Main
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  .layout-header {
    background: #eee;
  }
  .layout-menu {
    height: calc(100vh - 60px);
  }
  .layout-main {
    height: calc(100vh - 60px);
  }
}
</style>
