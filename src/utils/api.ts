import type { Cocktail } from '@/types/cocktail'

export async function fetchCocktails(code: string): Promise<Cocktail[]> {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`
    )

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const data = await response.json()
    return data.drinks || []
  } catch (error) {
    console.error(`API error for ${code}:`, error)
    throw error
  }
}
