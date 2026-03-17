import { COCKTAIL_DATA } from '@/constants/cocktails';

export type CocktailType = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
};

export type CocktailCode = (typeof COCKTAIL_DATA)[number]['code'];

export interface CocktailsState {
  data: Partial<Record<CocktailCode, CocktailType[]>>;
  loading: Partial<Record<CocktailCode, boolean>>;
  error: Partial<Record<CocktailCode, string | null>>;
}

export const COCKTAIL_CODES = COCKTAIL_DATA.map((el) => el.code);

export const isValidCode = (code: string): code is CocktailCode => {
  return (COCKTAIL_CODES as readonly string[]).includes(code);
};
