<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<template>
  <div class="not-found">
    <h1>404 - Cocktail not found</h1>
    <p>Try one of these:</p>
    <nav>
      <a href="/margarita">Margarita</a>
      <a href="/mojito">Mojito</a>
      <a href="/a1">A1</a>
      <a href="/kir">Kir</a>
    </nav>
  </div>
</template>
