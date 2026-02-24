<script setup lang="ts">
  import Header from '@/components/Header';
  import Menu from '@/components/Menu';
</script>

<template>
  <div id="app">
    <Header />
    <div class="page-container">
      <Menu />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>
