<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<template>
  <Header>
    <template #header> Hello </template>
    <router-view></router-view>
  </Header>
</template>
