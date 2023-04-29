<template>
  <AppShell>
    <template #header> Hello </template>
    <router-view></router-view>
  </AppShell>
</template>
<script setup lang="ts">
import AppShell from "@/components/AppShell.vue";
</script>