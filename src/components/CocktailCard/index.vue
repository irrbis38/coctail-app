<script setup lang="ts">
  import type { Cocktail } from '@/types/cocktail';
  import { computed } from 'vue';

  const props = defineProps<{
    cocktail: Cocktail;
  }>();

  function isValidKey<T extends Record<string, any>>(
    obj: T,
    key: string
  ): key is Extract<keyof T, string> {
    return key in obj;
  }

  const ingredients = computed(() => {
    const items = [];

    for (let i = 1; i <= 15; i++) {
      const iKey = `strIngredient${i}`;
      const mKey = `strMeasure${i}`;

      if (isValidKey(props.cocktail, iKey)) {
        const name = props.cocktail[iKey];

        if (typeof name === 'string' && name.trim()) {
          const measure = isValidKey(props.cocktail, mKey) ? props.cocktail[mKey] : '';

          items.push({
            name: name.trim(),
            measure: typeof measure === 'string' ? measure.trim() : '',
          });
        }
      }
    }

    return items;
  });
</script>

<template>
  <article class="cocktail-card">
    <h3 class="cocktail-card__title">{{ cocktail.strDrink }}</h3>
    <p class="cocktail-card__description">{{ cocktail.strInstructions }}</p>

    <ul class="cocktail-card__ingredients">
      <li
        v-for="(item, index) in ingredients"
        :key="index"
        class="cocktail-card__ingredients-item"
      >
        <span class="cocktail-card__ingredients-item-name">{{ item.name }}</span>
        <span
          v-if="item.measure"
          class="cocktail-card__ingredients-item-dots"
        />
        <span
          v-if="item.measure"
          class="cocktail-card__ingredients-item-measure"
        >
          {{ item.measure }}
        </span>
      </li>
    </ul>

    <img
      :src="cocktail.strDrinkThumb"
      :alt="cocktail.strDrink"
      loading="lazy"
      class="cocktail-card__img"
    />
  </article>
</template>

<style src="./style.scss" scoped lang="scss" />
