<script setup lang="ts">
  import { COCKTAIL_DATA } from '@/constants/cocktails';
</script>

<template>
  <nav class="menu">
    <ul class="menu-list">
      <li
        v-for="item in COCKTAIL_DATA"
        :key="item.code"
        class="menu-item"
      >
        <router-link
          v-slot="{ href, navigate, isActive }"
          :to="item.path"
          custom
        >
          <span
            v-if="isActive"
            class="menu-link--active"
          >
            {{ item.title }}
          </span>

          <a
            v-else
            :href="href"
            @click="navigate"
          >
            {{ item.title }}
          </a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style src="./style.scss" scoped lang="scss" />
