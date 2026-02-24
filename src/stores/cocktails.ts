import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchCocktails } from '@/utils/api'
import type { CocktailsState, CocktailCode } from '@/types/cocktail'

export const useCocktailsStore = defineStore('cocktails', () => {
  const state = ref<CocktailsState>({
    data: {},
    loading: {},
    error: {}
  })

  const cocktails = computed(() => state.value.data)
  const isLoading = computed(() => (code: CocktailCode) =>
    state.value.loading[code] || false
  )

  const hasError = computed(() => (code: CocktailCode) =>
    !!state.value.error[code]
  )

  const errorMessage = computed(() => (code: CocktailCode) =>
    state.value.error[code] || ''
  )

  const fetchCocktail = async (code: CocktailCode) => {
    if (state.value.data[code] && !state.value.loading[code]) {
      return state.value.data[code]
    }

    state.value.loading[code] = true
    state.value.error[code] = null

    try {
      const data = await fetchCocktails(code)
      state.value.data[code] = data
      return data
    } catch (error) {
      state.value.error[code] = error instanceof Error
        ? error.message
        : 'Failed to load cocktails'
      throw error
    } finally {
      state.value.loading[code] = false
    }
  }

  const reset = () => {
    state.value = {
      data: {},
      loading: {},
      error: {}
    }
  }

  return {
    cocktails,
    isLoading,
    hasError,
    errorMessage,
    fetchCocktail,
    reset
  }
})
