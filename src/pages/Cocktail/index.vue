<script setup lang="ts">
  import { computed, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCocktailsStore } from '@/stores/cocktails';
  import { COCKTAIL_CODES, type CocktailCode } from '@/types/cocktail';
  import CocktailCard from '@/components/CocktailCard';

  interface Props {
    code: string;
  }

  defineProps<Props>();

  const route = useRoute();
  const store = useCocktailsStore();

  const isValidCode = (code: string): code is CocktailCode => {
    return code in COCKTAIL_CODES;
  };

  const currentCode = computed<CocktailCode>(() => {
    const paramCode = route.params.code;

    if (typeof paramCode === 'string' && isValidCode(paramCode)) {
      return paramCode;
    }

    return 'margarita';
  });

  const cocktails = computed(() => store.cocktails[currentCode.value] || []);
  const loading = computed(() => store.isLoading(currentCode.value));
  const error = computed(() => store.errorMessage(currentCode.value));

  const loadData = async () => {
    await store.fetchCocktail(currentCode.value);
  };

  onMounted(loadData);

  watch(currentCode, () => {
    loadData();
  });
</script>

<template>
  <section class="cocktail-page">
    <h2 class="cocktail-page__title">{{ currentCode }}</h2>

    <div
      v-if="loading"
      class="loading"
    >
      Loading...
    </div>
    <div
      v-else-if="error"
      class="error"
    >
      {{ error }}
    </div>

    <div
      v-else-if="cocktails.length"
      class="cocktails-list"
    >
      <CocktailCard
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </section>
</template>

<style src="./style.scss" scoped lang="scss" />
