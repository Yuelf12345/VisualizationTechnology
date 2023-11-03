<template>
  <div>
    <h2>page1</h2>
    {{ dataStore.name }}-{{ dataStore.age }}
  </div>
</template>

<script setup lang="ts">
import { DataStore } from "../store";
const dataStore = DataStore();
</script>

<style></style>
