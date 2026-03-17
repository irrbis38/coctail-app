<script setup lang="ts">
  import { computed, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useCocktailsStore } from '@/stores/cocktails';
  import { type CocktailCode, isValidCode } from '@/types/cocktail';
  import CocktailCard from '@/components/CocktailCard';

  interface Props {
    code: string;
  }

  defineProps<Props>();

  const route = useRoute();
  const store = useCocktailsStore();
  const { cocktails, isLoading } = storeToRefs(store);
  const { getCocktail } = store;

  const currentCode = computed<CocktailCode>(() => {
    const paramCode = route.params.code;

    if (typeof paramCode === 'string' && isValidCode(paramCode)) {
      return paramCode;
    }

    return 'margarita';
  });

  const currentCocktailsList = computed(() => cocktails.value[currentCode.value] ?? []);

  const loading = computed(() => isLoading.value(currentCode.value));

  const loadData = () => getCocktail(currentCode.value);

  onMounted(loadData);

  watch(currentCode, loadData);
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
    <template v-else>
      <div
        v-if="currentCocktailsList.length"
        class="cocktails-list"
      >
        <CocktailCard
          v-for="cocktail in currentCocktailsList"
          :key="cocktail.idDrink"
          :cocktail="cocktail"
        />
      </div>
      <div v-else>Ничего не найдено</div>
    </template>
  </section>
</template>

<style src="./style.scss" scoped lang="scss" />
