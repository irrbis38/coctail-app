export interface Cocktail {
  code: string;
  title: string;
  path: string;
}

export const COCKTAIL_DATA: readonly Cocktail[] = [
  {
    code: 'margarita',
    title: 'Margarita',
    path: '/margarita'
  },
  {
    code: 'mojito',
    title: 'Mojito',
    path: '/mojito'
  },
  {
    code: 'a1',
    title: 'A1',
    path: '/a1'
  },
  {
    code: 'kir',
    title: 'Kir',
    path: '/kir'
  }
] as const;
